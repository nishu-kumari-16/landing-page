import { Box, Button, Typography } from "@mui/material";
import AppLogoImg from "../../assets/icons/logo.png";
import { headerLargeData } from "./meta";
import colorPalette from "../../helpers/color-palette";
import TopBanner from "../top-banner";
import { appRoutes } from "../header/meta";
import { useLocation, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderLarge = () => {
  const { pathname } = useLocation();

  const renderRoutes = (showCloseIcon: boolean = false) => {
    return appRoutes.map((route, index) => (
      <Link to={route.path} key={index} className="relative z-[5] py-5">
        <Typography
          color={colorPalette.white}
          className={`hover:cursor-pointer hover:underline ${
            pathname === route.path && "underline"
          }`}
        >
          {route.name}
        </Typography>
      </Link>
    ));
  };

  return (
    <Box className="flex flex-col w-full fixed top-0 z-[2] bg-white">
      <TopBanner />

      <Box className="flex flex-col px-[8rem] py-4 z-[3]">
        <Box className="flex justify-between pb-6">
          <Box className="flex gap-1 items-center">
            <img src={AppLogoImg} alt="logo" />
            <Typography className="!font-bold text-darkViolet !text-2xl">
              AppName
            </Typography>
          </Box>
          <Box className="flex gap-6 items-center">
            {headerLargeData.infoData.map((data, index) => (
              <Box className="flex gap-2 items-center" key={index}>
                {data.icon}
                <Box className="flex flex-col gap-1">
                  <Typography color={colorPalette.cloudyGray} fontSize={12}>
                    {data.name}
                  </Typography>
                  <Typography color={colorPalette.codGray} fontSize={14}>
                    {data.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="flex  w-[calc(70%+30px)] self-end absolute right-0 top-[8rem] overflow-hidden z-10">
          <div className="z-[1] m-auto h-14 w-24 bg-yellow rotate-[70deg] mr-[-3rem]"></div>
          <div className="flex gap-6 w-[calc(100%-30px)] bg-yellow  ">
            {renderRoutes()}
            <div className="flex flex-1 gap-4 justify-end items-center bg-yellow">
              <SearchIcon className="text-white" />
              <MenuIcon className="text-white" />
              <Button className="!h-full !rounded-none !text-white !capitalize !bg-black !w-[120px]">
                Book a Taxi
              </Button>
            </div>
          </div>
        </Box>
        <Box className="flex w-full self-end absolute right-[6.95rem] top-[12rem]">
          <div className="flex m-auto h-40 w-60 bg-yellow rotate-[-70deg] mr-[-3rem]">
            <div className=" h-12 w-60 bg-black mr-[-3rem] self-end"></div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
export default HeaderLarge;
