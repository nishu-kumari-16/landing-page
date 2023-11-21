import { Box, Button, Typography } from "@mui/material";
import AppLogoImg from "../../assets/icons/app-logo.png";
import { appRoutes } from "./meta";
import colorPalette from "../..//helpers/color-palette";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const renderRoutes = (showCloseIcon: boolean = false) => {
    return appRoutes.map((route, index) => (
      <Link
        to={route.path}
        key={index}
        onClick={() => showCloseIcon && setMenuOpen(false)}
      >
        <Typography
          color={colorPalette.black}
          className={`${
            pathname === route.path && "underline"
          } hover:cursor-pointer hover:text-[#656565]`}
        >
          {route.name}
        </Typography>
      </Link>
    ));
  };

  return (
    <React.Fragment>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ right: "100% " }}
            animate={{
              right: "0",
            }}
            exit={{
              width: 0,
              transition: { duration: 0.1 },
            }}
            className={`left-0 flex-1 fixed z-[50] top-0 py-6 bg-[#FBF9FF] shadow-md flex-col bottom-0 
              `}
          >
            <Box
              className={`flex gap-11 items-center justify-center flex-1 flex-col h-full
              `}
            >
              <CloseIcon
                className="absolute left-3 top-6 hover:cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
              {renderRoutes(true)}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      <Box className="flex flex-col flex-1 w-full fixed top-0 z-[15] shadow-sm">
        <Box
          className="flex py-3 px-2 sm:px-0  sm:py-6 gap-4 items-center box-border  w-full bg-white "
          sx={{
            paddingX: { md: "0", lg: "10rem" },
            justifyContent: { xs: "space-between" },
            paddingLeft: { xs: "3rem" },
            boxShadow:
              window.scrollY > 500
                ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
                : "none",
          }}
        >
          <Box
            sx={{
              display: { xs: isMenuOpen ? "none" : "block", md: "none" },
            }}
            onClick={toggleMenu}
            className="absolute left-3 top-6 hover:cursor-pointer"
          >
            <MenuIcon />
          </Box>
          <Box className="flex gap-1 items-center">
            <img src={AppLogoImg} alt="logo" className="max-w-[100px]" />
          </Box>
          <Box
            className={` gap-11 items-center justify-center flex-1
        `}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {renderRoutes(false)}
          </Box>

          <div className="flex gap-4 justify-end items-center ">
            <Button
              className="!h-full !rounded-none !text-white !capitalize !bg-black !w-[120px]"
              onClick={() => {
                navigate("/", { state: { isNavigated: true } });
              }}
            >
              Book a Taxi
            </Button>
          </div>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default Header;
