'use client';

import React from 'react';

import { SwipeableDrawerProps, SwipeableDrawer, styled } from '@mui/material';


import Flex from '../layout/Flex';
import Grid from '../layout/Grid';
import Typography from './Typography';
import { BoxShadow, breakpoints, colorPalette } from '@/theme';

interface Props extends SwipeableDrawerProps {
  children: React.ReactNode;
  title: string;
}

// Custom Drawer component
const BottomSheet: React.FC<Props> = ({ children, onClose, open, title, ...rest }) => {
  /**
   * useEffect to manage body scroll
   */

  /**
   * Template rendering
   */
  return (
    <MuiDrawerStyle
      SlideProps={{
        timeout: {
          enter: 300, // duration for opening
          exit: 300, // duration for closing
        },
      }}
      anchor='bottom'
      open={open}
      onClose={onClose}
      {...rest}
    >
      <Flex
        className='title-style'
        padding={'12px 18px'}
        style={{
          boxShadow: BoxShadow.shadow2,
          borderBottom: `0.5px solid ${colorPalette.gray[7]}`,
          backgroundColor: colorPalette.gray[2],
        }}
      >
        <Typography color={colorPalette.gray[11]} fontWeight='600' variant='body1'>
          {title}
        </Typography>
      </Flex>
      <Grid
        sx={{ minHeight: '20vh' }}
        className='title-style'
        component={'section'}
        style={{ backgroundColor: colorPalette.gray[1] }}
        overflow={'scroll'}
        maxHeight={'80vh'}
      >
        {children}
      </Grid>
    </MuiDrawerStyle>
  );
};

export default BottomSheet;

const MuiDrawerStyle = styled(SwipeableDrawer)`
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  .title-style {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  .mui-gq1um1-MuiPaper-root-MuiDrawer-paper {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
`;
