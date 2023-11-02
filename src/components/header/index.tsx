import { Box, Typography } from "@mui/material";
import { ReactComponent as AppLogo } from "../../assets/icons/logo.svg";
import { ReactComponent as AppLogoImg } from "../../assets/icons/logo-img.svg";
import { appRoutes } from "./meta";
import colorPalette from "../..//helpers/color-palette";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

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
          color={
            pathname === route.path ? colorPalette.gray : colorPalette.black
          }
          className={`hover:cursor-pointer hover:text-[#656565]`}
        >
          {route.name}
        </Typography>
      </Link>
    ));
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 800 && setMenuOpen(false);
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

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
            className={`left-0 flex-1 fixed z-[12] top-0 py-6 bg-[#FBF9FF] shadow-md flex-col bottom-0 
              `}
          >
            <Box
              className={`flex gap-11 items-center justify-center flex-1 flex-col h-full
              `}
            >
              <CloseIcon
                className="absolute left-3 top-6 hover:cursor-pointer "
                onClick={() => setMenuOpen(false)}
              />
              {renderRoutes(true)}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      <Box
        className="flex py-3 px-2 sm:px-0 sm:py-6 gap-4 items-center box-border fixed top-0 z-[11] w-full bg-white "
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
          <AppLogoImg />
          {width > 500 && (
            <Typography className="!font-bold text-darkViolet !text-2xl">
              GoVaahan
            </Typography>
          )}
        </Box>
        <Box
          className={` gap-11 items-center justify-center flex-1
        `}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {renderRoutes(false)}
        </Box>

        <div className="flex gap-3 tablet:gap-6 items-center">
          <div
            className="text-grayishViolet text-sm
             font-medium hover:text-veryDarkBlue cursor-pointer"
          >
            Login
          </div>
          <button
            className="text-white text-sm bg-darkViolet border-none rounded-[3rem] px-6 py-3
             font-medium hover: cursor-pointer hover:opacity-[0.8]"
          >
            Sign up
          </button>
        </div>
      </Box>
    </React.Fragment>
  );
};
export default Header;
