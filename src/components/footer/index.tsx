import AppLogoImg from "../../assets/icons/app-logo.png";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Input from "../input";
import Button from "../button";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import colorPalette from "../../helpers/color-palette";
import FooterVideo from "../../assets/icons/footer-animation.mp4";

const footerLinks = [
  {
    category: "Working Hours",
    links: [
      { text: "Monday-Friday:", subtext: "9:00am To 8:00pm" },
      { text: "Saturday:", subtext: "10:00am To 7:30pm" },
      { text: "Sunday:", subtext: "Close Day!" },
    ],
  },
  {
    category: "Useful Links",
    links: [
      { name: "Cancellation & Refund Policy", path: "/cancellation-refund" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Use", path: "/terms-of-use" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    category: "Head Office",
    links: [
      {
        text: "Location:",
        subtext:
          "Near NTPC Thermal Power, Harchnda Road Railway Crossing Kanti, Muzaffarpur, Bihar 843109",
      },
      { text: "Join Us:", subtext: "help@govahan.com" },
    ],
  },
  {
    category: "NewsLetter Signup",
    links: [
      {
        component: (
          <div className="flex flex-col">
            <Input
              className="bg-white rounded-tl-none rounded-bl-none"
              placeholder="Your Email"
              style={{ border: "none" }}
            />
            <Button className="!bg-fulvous !text-black w-fit !rounded-tl-none !px-6 !text-xs">
              Subscribe now
            </Button>
          </div>
        ),
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex  bg-black justify-center tablet:justify-normal relative">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 right-0 bottom-0 w-full"
      >
        <source src={FooterVideo} type="video/mp4" />
      </video>
      <div className="flex flex-col gap-4 flex-1 text-center tablet:text-left z-[2] bg-[rgba(0,0,0,0.5)]">
        <div className="flex relative gap-6 flex-wrap tablet:flex-row flex-col ">
          <div className="pr-4 flex items-center tablet:pl-[8rem] pl-4 my-[1.5rem] tablet:my-[3rem] text-white gap-1 text-[1.5rem] border-r-lightGray border-r-0 tablet:border-r-2 font-semibold">
            <img src={AppLogoImg} alt="app-logo" className="max-w-[170px]" />
          </div>
          <Typography
            fontSize={12}
            className="text-mutedGray flex-1 !my-[1.5rem] tablet:!my-[3rem]"
            fontWeight={500}
          >
            We successfully cope with tasks of varying complexity, provide
            long-term guarantees and regularly master technologies.
          </Typography>
          <div className="flex flex-1 relative mt-[-1rem] bg-fulvous items-center gap-4 h-fit py-6 px-[3rem] z-[11]">
            <WifiCalling3Icon className="text-white " />
            <div className="flex flex-col">
              <Typography fontSize={12} color={colorPalette.white}>
                Call For Booking
              </Typography>
              <Typography
                fontSize={20}
                fontWeight={600}
                color={colorPalette.black}
              >
                840-917-2925
              </Typography>
            </div>
          </div>
        </div>
        <Grid
          container
          spacing={4}
          columns={{ xs: 3, sm: 6, md: 12 }}
          className=" px-4 tablet:px-[8rem] pb-[4rem]"
        >
          {footerLinks.map((data, index) => (
            <Grid
              item
              className="flex-[2] flex !flex-col gap-4 !text-left"
              xs={3}
              sm={3}
              md={3}
              key={index}
            >
              <div className="flex flex-col text-sm text-white font-bold">
                {data.category}
                <div className="w-[60px] h-[3px] bg-yellow"></div>
              </div>

              <div className="flex flex-col gap-4">
                {data.links?.map((link: any, index) => (
                  <div
                    className="text-sm text-darkGray hover:cursor-pointer hover:text-white"
                    key={index}
                  >
                    {link.name && <Link to={link.path}>{link?.name}</Link>}

                    {link.text && (
                      <React.Fragment>
                        <Typography
                          fontSize={12}
                          className="text-fulvous !uppercase"
                          fontWeight={500}
                        >
                          {link.text}
                        </Typography>
                        <Typography
                          fontSize={12}
                          className="text-mutedGray !uppercase"
                        >
                          {link?.subtext}
                        </Typography>
                      </React.Fragment>
                    )}
                    {link?.component}
                  </div>
                ))}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
export default Footer;
