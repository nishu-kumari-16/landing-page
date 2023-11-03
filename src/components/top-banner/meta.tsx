import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export const TopBannerData = {
  supportOptions: [
    { name: "Help", path: "/help" },
    { name: "Support", path: "/support" },
    { name: "FAQ", path: "/faq" },
  ],
  socialMediaIcons: [
    { icons: <FacebookIcon />, path: "www.facebook.com" },
    { icons: <TwitterIcon />, path: "www.twitter.com" },
    { icons: <InstagramIcon />, path: "www.instagram.com" },
    { icons: <LinkedInIcon />, path: "www.linkedin.com" },
  ],
};
