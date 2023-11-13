import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const headerLargeData = {
  infoData: [
    {
      name: "Call Us Now",
      value: "840-917-2925",
      icon: <WifiCalling3Icon className="text-fulvous !w-[2rem] !h-[2rem]" />,
    },
    {
      name: "Email Now",
      value: "help@govahan.com",
      icon: (
        <MarkEmailUnreadIcon className="text-fulvous  !w-[2rem] !h-[2rem]" />
      ),
    },
    {
      name: "Near NTPC Thermal Power, Harchnda Road Railway Crossing Kanti",
      value: "Muzaffarpur, Bihar 843109",
      icon: <LocationOnIcon className="text-fulvous  !w-[2rem] !h-[2rem]" />,
    },
  ],
};
