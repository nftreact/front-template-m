import { Flex, TextField, Typography } from "@/libs/primitives";
import { colorPalette } from "@/theme";
import Image from 'next/image'

export default function Hero(){
    
    
    
    
    return(
        <Flex width="100%" overflow="hidden" >
            <Flex marginTop={{xtablet:"-345px",mobile:"-160px"}}>

            <Image
             
            width={2800}
            height={800}
            src="/image/landing-hero.jpeg"
            alt="hero"
            style={{ objectFit: 'cover' ,width:"100%"}}>
            </Image>
             </Flex>
            <Flex paddingTop={{xtablet:"94.5px",mobile:"88px"}} paddingRight={{xtablet:"142px",mobile:"16px"}} paddingLeft={{xtablet:"0",mobile:"16px"}} position={"absolute"} width={{xtablet:"50%",mobile:"100%"}} bgcolor={"transparent"}>
            <Typography  fontSize={{xtablet:"12px",mobile:"10px"}} color={colorPalette.blue[9]} component={"h2"}>برنامه ریز هوشمند سفر 780</Typography>
            <Typography marginTop={"4px"} marginBottom={"16px"} fontSize={{xtablet:"32px",mobile:"18px"}} color={colorPalette.gray[12]} component={"h1"}>دنیای بزرگی اون بیرونه<br /> بیا با هم بزنیم بیرون !</Typography>
            <Typography fontSize={"12px"} lineHeight={"250%"} color={colorPalette.gray[11]} component={"h3"}>سامانه هوشمند برنامه ریزی سفر 780 بهت کمک می کنه تا برای گشت و گذار های روزانه یا سفر های طولانیت برنامه ریزی مناسبی داشته باشی تا بتونی همه جا رو بگردی.</Typography>
            
            </Flex>
        </Flex>
    )
}