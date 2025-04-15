'use client'

import { Box, Button, Flex, Grid,Typography } from '@/libs/primitives'
import { Container, Link } from '@mui/material'
import Image from 'next/image'

/**
 * props
 * _______________________________________________________________________________
 */

const Header = () => {
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
    <Flex  border={{mobile:"10px solid red",laptop:"20px solid blue"}}  padding={2} justifyContent={'center'} alignItems={'center'}>
      <Container maxWidth="desktop">
  
      <Box sx={{ flexGrow: 1 }}>
      <Grid  container spacing={3} gap={10}>
        <Grid size="grow">
        <a href="/#"  >
  <Box component="a" sx={{ display: 'block', cursor: 'pointer' }}>
    <Image 
      src="/image/header-logo.png" 
      alt="Logo 1" 
      width={80} 
      height={40} 
      style={{ objectFit: 'contain' }}
    />
  </Box>
</a>
        </Grid>
        <Grid justifyContent="center" size={10}>
          
        <Box display="flex" gap={2} justifyContent="center" alignItems={"center"}>  
                <a href="/planer" >
                  <Typography >برنامه ریز</Typography>
                </a>
                <a href="/tour" >
                  <Typography  >تور ساز</Typography>
                </a>
                <a href="/paper" >
                  <Typography  >مقالات</Typography>
                </a>
                <a href="/about" >
                  <Typography  >درباره ما</Typography>
                </a>
                <a href="/contact" >
                  <Typography  >تماس با ما</Typography>
                </a>
                <a href="/ads" >
                  <Typography  >تبلیغات</Typography>
                </a>
              </Box>
        </Grid>
        <Grid size="grow">
        <Link href="/login" passHref>
  <Box component="a" sx={{ display: 'block', cursor: 'pointer' }}>
    <Image 
      src="/image/avatar.png" 
      alt="avatar" 
      width={40} 
      height={40} 
      style={{ objectFit: 'contain' }}
    />
  </Box>
</Link>
        </Grid>
      </Grid>
    </Box>
      </Container>
    </Flex>
  )
}

export default Header

/**
 * styled-component
 * _______________________________________________________________________________
 */
