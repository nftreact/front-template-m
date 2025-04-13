/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';

import Cookies from 'universal-cookie';

// Define action types as constants
const SET_PROVINCE_ID = 'SET_PROVINCE_ID';
const UPDATE_PLANNER_DATA = 'UPDATE_PLANNER_DATA';
const cookie = new Cookies();

// Define the shape of your state
interface State {
  provinceID: number | null;
  plannerData: any | null;
}

// Define actions with proper TypeScript typing
interface SetProvinceIDAction {
  type: typeof SET_PROVINCE_ID;
  payload: number;
}

interface UpdatePlannerDataAction {
  type: typeof UPDATE_PLANNER_DATA;
  payload: any;
}

type Action = SetProvinceIDAction | UpdatePlannerDataAction;

// Set initial state with provinceID = 8 and optional plannerData
const getInitialState = (initialPlannerData: any | null): State => ({
  provinceID: 8,
  plannerData: initialPlannerData,
});

// Reducer function
const provinceReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case SET_PROVINCE_ID:
      return { ...state, provinceID: action.payload };
    case UPDATE_PLANNER_DATA:
      return { ...state, plannerData: action.payload };
    default:
      return state;
  }
};

// Define context type to include both state and action dispatchers
interface ProvinceContextType {
  state: State;
  setProvinceID: (id: number) => void;
  updatePlannerData: (data: any) => void;
}

// Create context with default values to avoid null errors
const ProvinceContext = createContext<ProvinceContextType>({
  state: getInitialState(null),
  setProvinceID: () => {},
  updatePlannerData: () => {},
});

// Context provider component with initial plannerData prop
export const ProvinceProvider = ({
  children,
  initialPlannerData,
}: {
  children: ReactNode;
  initialPlannerData?: any;
}) => {
  const [state, dispatch] = useReducer(provinceReducer, getInitialState(initialPlannerData ?? null));

  // Action creators
  const setProvinceID = (id: number) => {
    dispatch({ type: SET_PROVINCE_ID, payload: id });
  };

  const updatePlannerData = (data: any) => {
    dispatch({ type: UPDATE_PLANNER_DATA, payload: data });
  };

  useEffect(() => {
    // Check for the planner data in cookies on client side (only runs once)
    const savedPlannerData = cookie.get('planner_data');
    if (savedPlannerData) {
      try {
        const parsedData = JSON.parse(savedPlannerData);
        dispatch({ type: UPDATE_PLANNER_DATA, payload: parsedData });
      } catch (error) {
        console.error('Error parsing planner_data from cookies:', error);
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <ProvinceContext.Provider value={{ state, setProvinceID, updatePlannerData }}>
      {children}
    </ProvinceContext.Provider>
  );
};

// Custom hook to use Province context
export const useProvince = (): ProvinceContextType => {
  const context = useContext(ProvinceContext);
  if (!context) {
    throw new Error('useProvince must be used within a ProvinceProvider');
  }
  return context;
};
