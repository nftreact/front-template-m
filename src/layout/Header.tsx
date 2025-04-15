"use client";

import { Flex, Box } from "@/libs/primitives";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { blue } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import { Button, Box } from "@mui/material";

/**
 * props
 * _______________________________________________________________________________
 */

const Header = () => {
  const menuItems = [
    { title: "برنامه ریز", path: "/" },
    { title: "تور ساز", path: "/a" },
    { title: "نقاط گردشگری", path: "/b" },
    { title: "مقالات", path: "/c" },
    { title: "تماس با ما", path: "/d" },
    { title: "درباره ما", path: "/e" },
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
    <>
      <Flex
        border={"5px solid red"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        paddingX={"15px"}
      >
        <Box border={"2px solid green"} display={{ laptop: "none" }}>
          <MenuIcon sx={{ fontSize: "30px", mt: 1 }} />
        </Box>
        <Box border={"2px solid green"} paddingTop={1} order={{ laptop: "" }}>
          <Image
            src="/image/header-logo.png"
            width={113}
            height={32}
            alt="لوگو"
          />
        </Box>
        <Flex
          display={{ mobile: "none", laptop: "flex" }}
          border={"2px solid green"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={2}
          color={blue}
          alignContent={"center"}
          textAlign={"center"}
          paddingTop={1.5}
          order={{ laptop: "" }}
        >
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index}>
              {item.title}
            </Link>
          ))}
        </Flex>

        <Box border={"2px solid green"}>
          <AccountCircleOutlinedIcon sx={{ fontSize: "30px", mt: 1 }} />
        </Box>
      </Flex>
    </>
  );
};

export default Header;

/**
 * styled-component
 * _______________________________________________________________________________
 */
