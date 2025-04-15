"use client";

// import { Flex } from "@/libs/primitives";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Button, Box } from "@mui/material";

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: 5,
        py: 1,
      }}
    >
      <Box
        sx={{ justifyContent: "center" }}
        display={{ mobile: "flex", laptop: "none" }}
      >
        <MenuOutlinedIcon sx={{ fontSize: "30px", mt: 1 }} />
      </Box>
      <Box
        component="img"
        src="/image/header-logo.png"
        alt="لوگو بزنیم بیرون"
        sx={{
          width: "100%",
          maxWidth: "113px",
          ml: "50px",
          height: "auto",
        }}
      />
      <Box
        sx={{ alignItems: "center" }}
        display={{ laptop: "flex", mobile: "none" }}
      >
        <Button component="a" href="/">
          برنامه ریز
        </Button>
        <Button component="a" href="/about">
          تور ساز
        </Button>
        <Button component="a" href="/contact">
          نقاط گردشگری
        </Button>
        <Button component="a" href="/contact">
          مقالات
        </Button>
        <Button component="a" href="/contact">
          تماس با ما
        </Button>
        <Button component="a" href="/contact">
          درباره ما
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AccountCircleOutlinedIcon sx={{ fontSize: "30px", mt: 1 }} />
      </Box>
    </Box>
  );
};

export default Header;

/**
 * styled-component
 * _______________________________________________________________________________
 */
