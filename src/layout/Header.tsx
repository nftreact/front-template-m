'use client'

import { Box, Button, Flex, Grid,Typography } from '@/libs/primitives'
import { Container, Link } from '@mui/material'
import Image from 'next/image'
import { Buttons } from '../../public/icon'
import { map } from 'leaflet'

/**
 * props
 * _______________________________________________________________________________
 */

const Header = () => {
  /**
   * const and variables
   * 
   */
    const itemList=[
      {id:1, text:"برنامه ریز", href:"/planer"},
      {id:2, text:"تور ساز", href:"/tour"},
      {id:3, text:"مقالات", href:"/paper"},
      {id:4, text:"درباره ما", href:"/about"},
      {id:5, text:"تماس با ما", href:"/contact"},
      {id:6, text:"تبلیغات", href:"/ads"},
    ]
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
    <Flex flexDirection="row" paddingX={3} paddingY={0.5} justifyContent={{laptop:"space-between",desktop:"space-between",xtablet:"space-between",tablet:"center",mobile:"center"}} alignItems={'center'}>
    
      <Flex>
        <a href='/#' style={{lineHeight:"0"}}><Image src="/image/header-logo.png" 
      alt="Logo 1" 
      width={100} 
      height={40} 
      style={{ objectFit: 'contain' }}/></a>
      
      </Flex>
      <Flex display={{laptop:"flex",desktop:"flex",xtablet:"flex",tablet:"none",mobile:"none"}} gap={2} flexDirection='row'  >
       {itemList.map((item)=>(
        <Typography key={item.id} color='#105FAE'><a href={item.href}>
        {item.text}</a>
        </Typography>
       ))}
      
      </Flex>
      <Flex display={{laptop:"flex",desktop:"flex",xtablet:"flex",tablet:"none",mobile:"none"}} >
        <a href='/login'><Buttons width="40px" height="40px"/></a>
      </Flex>
    </Flex>
  )
}

export default Header

/**
 * styled-component
 * _______________________________________________________________________________
 */
  {/* <Container maxWidth="desktop">
  
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
      </Container> */}