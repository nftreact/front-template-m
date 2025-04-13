'use client';

import { forwardRef } from 'react';

import { Dialog, DialogProps, styled } from '@mui/material';
import { Typography } from '@mui/material';


import Flex from '../../layout/Flex';
import Grid from '../../layout/Grid';
import { breakpoints, colorPalette } from '@/theme';

/**
 * props
 * _______________________________________________________________________________
 */
type Props = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
} & DialogProps;

// Refactored Modal component with forwardRef
const Modal = forwardRef<HTMLDivElement, Props>(
  ({ handleClose, open, children, title, ...props }: Props, ref) => {
    /**
     * const and variables
     * _______________________________________________________________________________
     */

    /**
     * useEffect
     * _______________________________________________________________________________
     */

    /**
     * hooks and methods
     * _______________________________________________________________________________
     */

    /**
     * template
     * _______________________________________________________________________________
     */
    return (
      <ModalStyle onClose={handleClose} open={open} ref={ref} {...props}>
        <Flex
          alignItems={'center'}
          style={{ backgroundColor: `${colorPalette.blue[12]}` }}
          direction={'row'}
          p={'8px 16px'}
          justifyContent={'space-between'}
        >
          <Typography color={colorPalette.gray[1]} fontWeight={'700'} variant='body1'>
            {title}
          </Typography>
          <Flex
            sx={{ backgroundColor: colorPalette.blue[11], cursor: 'pointer' }}
            width={'28px'}
            height={'28px'}
            borderRadius={'8px'}
            justifyContent={'center'}
            alignItems={'center'}
            onClick={handleClose}
          >
            {/* <Close onClick={handleClose} /> */}
          </Flex>
        </Flex>
        <Grid
          component={'section'}
          style={{ backgroundColor: colorPalette.gray[2] }}
          overflow={'scroll'}
          maxHeight={'400px'}
          width={'100%'}
          minWidth={'700px'}
          maxWidth={'700px'}
        >
          {children}
        </Grid>
      </ModalStyle>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;

const ModalStyle = styled(Dialog)`
  display: none;

  @media (min-width: ${breakpoints.laptop}) {
    display: block;
  }

  & .MuiPaper-root {
    border-radius: 12px !important;
  }
`;
