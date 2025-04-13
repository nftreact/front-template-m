'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colorPalette } from './colorPalette';

let theme = createTheme({
  typography: {
    fontFamily: 'var(--sans-font)',
    h1: {
      fontSize: '2.5rem', // 40px equivalent
      fontWeight: 600,
    },
    h2: {
      fontSize: '3rem', // 32px equivalent
      fontWeight: 500,
    },
    h3: {
      fontSize: '2rem', // 24px equivalent
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.8rem', // 20px equivalent
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem', // 18px equivalent
      fontWeight: 400,
    },
    body1: {
      fontSize: '0.875rem', // 14px equivalent
      fontWeight: 500,
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '0.75rem', // 12px equivalent
      fontWeight: 400,
      lineHeight: 2,
    },
    caption: {
      fontSize: '0.625rem', // 10px equivalent
      fontWeight: 400,
      lineHeight: 2,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      xtablet: 1024,
      laptop: 1280,
      desktop: 1366,
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transformOrigin: 'top right',
          right: 15,

          top: '1px',
          left: 'auto',
          fontSize: '14px',
          color: colorPalette.gray[9],

          '&.Mui-focused': {
            color: colorPalette.blue[11], // Change color when focused
            top: '2px',
            scale: 0.9,
            backgroundColor: colorPalette.gray[2],
          },

          '&.Mui-error': {
            color: colorPalette.pink[9], // Error color
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          maxHeight: '48px',
          padding: '0px !important',

          '& label': {
            transformOrigin: 'top right',
            right: '25px',
            top: '0px',
            left: 'auto',
            fontSize: '14px',
            color: colorPalette.gray[12],

            '&.Mui-error': {
              color: colorPalette.pink[9], // Error color for helper text
            },
          },
          '& legend': {
            textAlign: 'right',
          },

          '&.Mui-disabled': {
            backgroundColor: colorPalette.gray[7],
            color: colorPalette.gray[7],
            cursor: 'not-allowed',
            opacity: 0.6,

            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: `${colorPalette.gray[9]} !important`,
              backgroundColor: colorPalette.gray[7],
              color: colorPalette.gray[7],
              cursor: 'not-allowed',
              // opacity: 0.6,
            },

            // Add hover effect when disabled
            '&:hover': {
              backgroundColor: `${colorPalette.gray[5]} !important`,
              color: `${colorPalette.gray[8]} !important`,
              opacity: 0.6,
            },
          },
        },
        select: {
          padding: '14px 16px !important',
          direction: 'rtl',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: 600,
          paddingRight: '16px !important',
          color: colorPalette.gray[12],
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: '12px',
          maxHeight: '250px',
          marginTop: '10px',
        },
        list: {
          direction: 'rtl',
          padding: '10px 0',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          minHeight: '40px',
          padding: '10px 16px',
          width: '96%',
          borderRadius: '6px',
          margin: 'auto',
          fontSize: '12px',
          fontWeight: 600,
          color: colorPalette.gray[11],
          '&.Mui-selected': {
            backgroundColor: colorPalette.blue[11],
            color: colorPalette.gray[1],
            borderRadius: '8px',
          },
          '&:hover': {
            backgroundColor: `${colorPalette.blue[11]} !important`,
            color: colorPalette.gray[1],
          },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          position: 'relative',
          padding: 5, // Add padding to match the spacing
          transition: 'all 0s ease-in-out',
          color: colorPalette.blue[9],

          '& .MuiSvgIcon-root': {
            fontSize: 20, // Bigger size for the outer circle
          },

          '&.Mui-checked': {
            color: colorPalette.blue[9], // Custom blue color when checked

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 20, // Outer circle size
              height: 20,
              backgroundColor: colorPalette.blue[9], // Blue outer color
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            },

            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 7, // Inner white circle
              height: 7,
              backgroundColor: 'white', // White inner circle
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            },
          },

          '&:hover': {
            backgroundColor: 'transparent', // No hover effect
          },

          '&:focus-visible': {
            outline: 'none', // Remove focus outline
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          gap: 8, // Adjust space between checkbox and label
        },

        label: {
          textWrap: 'nowrap',
          fontSize: '12px', // Set font size
          fontWeight: 600, // Bold label
          color: colorPalette.gray[11], // Default text color
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          position: 'relative',
          padding: 5,
          // transition: 'all 0.2s ease-in-out',
          color: colorPalette.gray[2], // Default color (gray)

          '& .MuiSvgIcon-root': {
            fontSize: 18, // Adjust icon size
          },

          // Unchecked state styles
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 16, // Outer box size
            height: 16,
            outline: 'none',
            border: `1.5px solid ${colorPalette.gray[7]}`, // Border similar to the unchecked style
            borderRadius: 4, // Rounded square edges
            transform: 'translate(-50%, -50%)',
            // transition: 'all 0.2s ease-in-out',
            boxShadow: 'none',
          },

          // Checked state styles
          '&.Mui-checked': {
            color: 'white', // Inner check color
            backgroundColor: colorPalette.blue[9], // Outer box color
            borderRadius: 4, // Rounded square like the image
            padding: 3, // Adjust padding to match the image
            // transition: 'background-color 0.2s ease-in-out',

            '& + .MuiFormControlLabel-label': {
              color: colorPalette.blue[9], // Change label color when checked
            },

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 16, // Outer box size
              height: 16,
              backgroundColor: colorPalette.blue[9], // Blue background
              borderRadius: 4, // Rounded square edges
              transform: 'translate(-50%, -50%)',
            },

            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 9, // Inner checkmark size
              height: 9,
              backgroundColor: 'white', // White checkmark
              clipPath: 'polygon(14% 44%, 0% 65%, 50% 100%, 100% 15%, 84% 0%, 41% 62%)', // Custom checkmark shape
              transform: 'translate(-50%, -50%)',
            },
          },

          '&:hover': {
            backgroundColor: 'transparent', // No hover effect
          },

          '&:focus-visible': {
            outline: 'none', // Remove focus outline
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-root': {
            fontSize: '12px !important',
          },
          '& .label': {
            transformOrigin: 'top right',
            right: 26,
            top: '-2px',
            left: 'auto',
            color: colorPalette.gray[9],
            '&.Mui-error': {
              color: colorPalette.pink[9], // Error color for helper text
            },
          },

          legend: {
            textAlign: 'right',
          },

          '& .MuiInputBase-root': {
            minHeight: '48px !important',
            padding: '16px',
          },
          '& legend': {
            textAlign: 'right',
          },
          '& label.Mui-focused': {
            color: colorPalette.gray[9],
            '&.Mui-error': {
              color: colorPalette.pink[9], // Error color for helper text
            },
          },

          '& label, & .MuiFormHelperText-root': {
            textAlign: 'right', // Aligning label and helper text to the right
            direction: 'rtl', // Ensuring RTL for both label & helper text
            marginRight: '13px',
            top: '-1px',
            '& label.Mui-focused': {},
          },
          '& .Mui-error': {
            '& label': {
              color: colorPalette.pink[9], // Error color for label when there's an error
            },
            '& .MuiOutlinedInput-root': {
              borderColor: colorPalette.pink[9], // Error border color
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          maxHeight: '48px',
          padding: '13px 16px !important',

          borderRadius: '8px',
          backgroundColor: colorPalette.gray[2],
          direction: 'rtl', // Input text direction

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.gray[7], // Default hover border color
            backgroundColor: colorPalette.blue[2],
            color: colorPalette.gray[9],
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.gray[7],
            borderWidth: '0.5px',
            backgroundColor: colorPalette.blue[2],
            color: colorPalette.gray[9],
          },

          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.pink[9], // Error border color
            borderWidth: '0.5px', // You can adjust the border width for the error state
            color: colorPalette.pink[9],
            backgroundColor: colorPalette.pink[2],
          },

          '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.pink[9], // Error border color on hover
            color: colorPalette.pink[9],
            backgroundColor: colorPalette.pink[2],
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: colorPalette.gray[6], // Error color on focus
            backgroundColor: colorPalette.gray[5],
          },

          '&.Mui-error': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: colorPalette.pink[9], // Error color on hover
              backgroundColor: colorPalette.pink[2],
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colorPalette.pink[9], // Error color on focus
              backgroundColor: colorPalette.pink[2],
            },
          },
        },

        input: {
          padding: '0px',
          zIndex: '1',
          color: colorPalette.gray[11],
          fontSize: '14px',
          direction: 'rtl',
          textAlign: 'right',
          // Ensure text inside input is RTL aligned
        },
        notchedOutline: {
          borderColor: colorPalette.gray[7], // Default border color
          borderWidth: '0.5px', // Optional: Adjust border thickness
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textAlign: 'right', // Ensuring helper text is also RTL
          direction: 'rtl',
          color: colorPalette.gray[9], // Default helper text color
          padding: '2px 10px 0px 0px !important',
          fontSize: '9px !important',
          '&.Mui-error': {
            color: colorPalette.pink[9], // Error color for helper text
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none !important',
          fontSize: '14px',
          borderRadius: '12px',
        },

        sizeSmall: {
          padding: '7px 12px !important',
        },

        sizeMedium: {
          padding: '9px 16px !important',
        },
        sizeLarge: {
          padding: '12px 30px !important',
        },
      },
      variants: [
        {
          props: { variant: 'primary-ghost' },
          style: {
            backgroundColor: colorPalette.blue[3],
            color: colorPalette.blue[11],
            '&:hover': {
              backgroundColor: colorPalette.blue[4],
            },
            '&:active': {
              backgroundColor: colorPalette.blue[4],
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:focus': {
              backgroundColor: colorPalette.blue[4],
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:disabled': {
              backgroundColor: colorPalette.gray[3],
              color: colorPalette.gray[8],
            },
          },
        },
        {
          props: { variant: 'secondary-ghost' },
          style: {
            backgroundColor: colorPalette.pink[3],
            color: colorPalette.pink[11],
            '&:hover': {
              backgroundColor: colorPalette.pink[4],
            },
            '&:active': {
              backgroundColor: colorPalette.pink[4],
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:focus': {
              backgroundColor: colorPalette.pink[4],
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:disabled': {
              backgroundColor: colorPalette.gray[3],
              color: colorPalette.gray[8],
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            backgroundColor: 'transparent',
            color: 'white',
            '&:hover': {
              backgroundColor: colorPalette.blue[3],
            },
            '&:active': {
              backgroundColor: colorPalette.blue[3],
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:focus': {
              backgroundColor: colorPalette.blue[3],
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:disabled': {
              backgroundColor: colorPalette.gray[3],
              color: colorPalette.gray[8],
            },
          },
        },
        {
          props: { variant: 'primary-contained' },
          style: {
            backgroundColor: colorPalette.blue[9],
            color: 'white',
            '&:hover': {
              backgroundColor: colorPalette.blue[10],
            },
            '&:active': {
              backgroundColor: colorPalette.blue[10],
            },
            '&:focus': {
              backgroundColor: colorPalette.blue[10],
            },
            '&:disabled': {
              backgroundColor: colorPalette.gray[3],
              color: colorPalette.gray[8],
            },
          },
        },
        {
          props: { variant: 'secondary-contained' },
          style: {
            backgroundColor: colorPalette.pink[9],
            color: 'white',
            '&:hover': {
              backgroundColor: colorPalette.pink[10],
            },
            '&:active': {
              backgroundColor: colorPalette.pink[10],
            },
            '&:focus': {
              backgroundColor: colorPalette.pink[10],
            },
            '&:disabled': {
              backgroundColor: colorPalette.gray[3],
              color: colorPalette.gray[8],
            },
          },
        },
        {
          props: { variant: 'primary-outlined' },
          style: {
            backgroundColor: colorPalette.gray[1],
            color: colorPalette.blue[11],
            border: `0.5px solid ${colorPalette.blue[9]}`,
            '&:hover': {
              backgroundColor: colorPalette.blue[3],
              color: colorPalette.blue[11],
              border: `0.5px solid ${colorPalette.blue[9]}`,
            },
            '&:active': {
              backgroundColor: colorPalette.blue[3],
              color: colorPalette.blue[11],
              border: `0.5px solid ${colorPalette.blue[9]}`,
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', // Flat & minimal shadow
            },
            '&:focus': {
              backgroundColor: colorPalette.blue[3],
              color: colorPalette.blue[11],
              border: `0.5px solid ${colorPalette.blue[9]}`,
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', // Flat & minimal shadow
            },
            '&:disabled': {
              backgroundColor: colorPalette.gray[3],
              color: colorPalette.gray[8],
              border: `0.5px solid ${colorPalette.gray[7]}`,
            },
          },
        },
        {
          props: { variant: 'secondary-outlined' },
          style: {
            borderRadius: '12px',
            backgroundColor: colorPalette.gray[1],
            color: colorPalette.pink[11],
            border: `0.5px solid ${colorPalette.pink[9]}`,
            '&:hover': {
              backgroundColor: colorPalette.pink[3],
              color: colorPalette.pink[11],
              border: `0.5px solid ${colorPalette.pink[9]}`,
            },
            '&:active': {
              backgroundColor: colorPalette.pink[3],
              color: colorPalette.pink[11],
              border: `0.5px solid ${colorPalette.pink[9]}`,
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:focus': {
              backgroundColor: colorPalette.pink[3],
              color: colorPalette.pink[11],
              border: `0.5px solid ${colorPalette.pink[9]}`,
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:disabled': {
              backgroundColor: colorPalette.gray[3],
              color: colorPalette.gray[8],
            },
          },
        },
        {
          props: { variant: 'palnner' },
          style: {
            borderRadius: '7px',
            backgroundColor: colorPalette.gray[2],
            color: colorPalette.gray[11],
            border: `0.5px solid ${colorPalette.gray[8]}`,
            '&:hover': {
              backgroundColor: colorPalette.gray[2],
              color: colorPalette.gray[11],
              border: `0.5px solid ${colorPalette.gray[8]}`,
            },
            '&:active': {
              backgroundColor: colorPalette.gray[2],
              color: colorPalette.gray[11],
              border: `0.5px solid ${colorPalette.gray[8]}`,
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:focus': {
              backgroundColor: colorPalette.gray[2],
              color: colorPalette.gray[11],
              border: `0.5px solid ${colorPalette.gray[8]}`,
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            },
            '&:disabled': {
              backgroundColor: colorPalette.gray[3],
              color: colorPalette.gray[8],
            },
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
