'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

import Image from 'next/image';

import image from '@/public/image/aplication-error.png';
import { useRouter } from '@bprogress/next';
import { Button, Flex, Grid, Typography } from '../primitives';
import { colorPalette } from '@/theme';

// Define the Props interface
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  router: ReturnType<typeof useRouter>;
}

// Define the State interface
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { fallback, children, router } = this.props;

    if (hasError) {
      return fallback ? (
        fallback
      ) : (
        <Flex
          width={'100%'}
          direction={{ mobile: 'column', laptop: 'row' }}
          alignItems={'center'}
          minHeight={'calc(100vh)'}
          m={'auto'}
          px={'16px'}
          gap={'40px'}
          justifyContent={'center'}
          maxWidth={{ mobile: '100%', tablet: '600px', xtablet: '1000px' }}
        >
          <Flex
            position={'relative'}
            width={{ mobile: '250px', tablet: '400px' }}
            height={{ mobile: '250px', tablet: '400px' }}
            display={{ mobile: 'flex', laptop: 'none' }}
          >
            <Image className='image' fill src={image} alt='ServerErrorImage' style={{ objectFit: 'cover' }} />
          </Flex>
          <Flex
            direction={'column'}
            alignItems={{ mobile: 'center', laptop: 'start' }}
            gap={'24px'}
            minWidth={{ tablet: '600px', laptop: '500px' }}
          >
            <Flex gap={'16px'} direction={'column'} alignItems={{ mobile: 'center', laptop: 'start' }}>
              <Typography variant='h3' style={{ color: colorPalette.gray[11] }}>
                به نظر میاد مشکلی پیش اومده!
              </Typography>
              <Typography variant='body1' style={{ color: colorPalette.gray[11] }}>
                چند لحظه صبر کن دوباره امتحان کن
              </Typography>
              <Typography variant='body1' style={{ color: colorPalette.gray[11] }}>
                اگر خواستی می تونی به صفحه اصلی بری یا از برنامه ریز استفاده کنی
              </Typography>
            </Flex>
            <Grid
              columns={{ mobile: 1, tablet: 2 }}
              width={{ mobile: '100%', laptop: 'max-content' }}
              spacing={'16px'}
              container
            >
              <Grid size={1}>
                <Button
                  sx={{ width: '100%', minWidth: '100px' }}
                  style={{ color: colorPalette.blue[11] }}
                  onClick={() => router.push('/')}
                  variant='primary-ghost'
                >
                  <Typography sx={{ textWrap: 'nowrap' }} variant='body1'>
                    صفحه اصلی
                  </Typography>
                </Button>
              </Grid>
              <Grid size={1}>
                <Button
                  sx={{ width: '100%', minWidth: '100px' }}
                  style={{ color: colorPalette.pink[11] }}
                  onClick={() => router.push('/planner?mode=create&plan=destination')}
                  variant='secondary-ghost'
                >
                  <Typography variant='body1'>برنامه ریز </Typography>
                </Button>
              </Grid>
            </Grid>
          </Flex>
          <Flex
            width={{ tablet: '400px', laptop: '500px' }}
            height={{ tablet: '400px', laptop: '470px' }}
            position={'relative'}
            display={{ mobile: 'none', laptop: 'flex' }}
          >
            <Image className='image' fill src={image} alt='ServerErrorImage' />
          </Flex>
        </Flex>
      );
    }

    return children;
    

  }
}

// Wrapper functional component to pass `useRouter` to the class component
function ErrorBoundaryWithRouter(props: Omit<ErrorBoundaryProps, 'router'>) {
  const router = useRouter();
  return <ErrorBoundary {...props} router={router} />;
}

export default ErrorBoundaryWithRouter;
