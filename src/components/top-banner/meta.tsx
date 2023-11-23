import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export const TopBannerData = {
  supportOptions: [
    { name: "Help", path: "/" },
    { name: "Support", path: "/" },
    { name: "FAQ", path: "/" },
  ],
  socialMediaIcons: [
    {
      icons: <FacebookIcon />,
      path: "https://facebook.com/GoVahanCarrierPvtLtd",
    },
    { icons: <TwitterIcon />, path: "https://twitter.com/GoVahan" },
    {
      icons: <InstagramIcon />,
      path: "https://instagram.com/govahan_official",
    },
    { icons: <LinkedInIcon />, path: "https://LinkedIn.com/company/GoVahan" },
  ],
};
