"use client";

import { Typography, Box, Flex } from "@/libs/primitives";
import Image from "next/image";

/**
 * props
 * _______________________________________________________________________________
 */

const Page = () => {
  /**
   * const and variables
   * _______________________________________________________________________________
   */

  const tour = [
    {
      title: "تور مثلث لرستان (خرم آباد)",
      price: "از 85500000 ریال",
      imageUrl: "./image/landing-hero.jpeg",
    },
    {
      title: "تور یزد",
      price: "از 65500000 ریال",
      imageUrl: "./image/landing-hero.jpeg",
    },
    {
      title: " شیراز ریلی",
      price: "از 85500000 ریال",
      imageUrl: "./image/landing-hero.jpeg",
    },
    {
      title: "قطار گرگان، گلستان گردی",
      price: "از 47500000 ریال",
      imageUrl: "./image/landing-hero.jpeg",
    },
    {
      title: " تور کیش ",
      price: "از 85500000 ریال",
      imageUrl: "./image/landing-hero.jpeg",
    },
    {
      title: " تور کیش ",
      price: "از 85500000 ریال",
      imageUrl: "./image/landing-hero.jpeg",
    },
  ];

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
    <Flex
      border={"1px solid blue"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {/* *************start of hero************* */}
      {/* <Box
        border={"1px solid blue"}
        justifyContent={"center"}
        width={100}
        height={100}
        style={{
          backgroundImage: "url('./image/landing-hero.jpeg')",
          position: "relative",
        }}
      >
        <Box border={"1px solid blue"} width={"500px"}>
          <Typography component={"span"} pb={1}>
            برنامه ریز هوشمند سفر هف‌هشتاد{" "}
          </Typography>
          <Typography variant={"h1"} width={"320px"} pb={1}>
            دنیای بزرگی اون بیرونه بیا با هم بزنیم بیرون !
          </Typography>
          <Typography component={"span"} pb={1}>
            سامانه هوشمند برنامه ریز سفر هف هشتاد بهت کمک می کنه تا برای گشت و
            گذار های روزانه یا سفرهای طولانیت برنامه ریزی مناسبی داشته باشی تا
            بتونی همه جا رو بگردی.{" "}
          </Typography>
        </Box>
      </Box> */}

      <Flex
        flexDirection={"row"}
        width={"100vw"}
        border={"1px solid red"}
        paddingX={5}
      >
        <Flex border={"2px solid orange"} flexGrow={1} width={200}>
          <Typography variant={"h1"} width={"320px"} pb={1}>
            تورها
          </Typography>
          <Typography component={"span"}>
            با استفاده از تورساز می توانید تورهای مناسب بودجه خودتون رو شناسایی
            کنید. همچنین می توانید از تورهای آماده هتف هشتاد نیز استفاده کنید.
          </Typography>
        </Flex>

        {/* *************start of tours************** */}

        <Flex
          border={"2px solid orange"}
          flexGrow={2}
          flexDirection={"row"}
          flexWrap={"wrap"}
        >
          {tour.map((item, index) => (
            <Box key={index} position="relative" width="100%" maxWidth={300}>
              <Image
                src="/image/landing-hero.jpeg"
                alt={item.title}
                width="100"
                height="100"
              />
              <Typography
                borderRadius={" 20px 0 0 20px"}
                border={"1px solid grey"}
                bgcolor={"#fff"}
                position="absolute"
                zIndex={10}
                top={2}
                right={0}
              >
                {item.title}
              </Typography>
              <Typography
                borderRadius={" 20px 0 0 20px"}
                bgcolor={"#fff"}
                border={"1px solid grey"}
                position="absolute"
                zIndex={10}
                top={"40%"}
                right={0}
              >
                {item.price}
              </Typography>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page;

/**
 * styled-component
 * _______________________________________________________________________________
 */
