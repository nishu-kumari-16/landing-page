import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const headerLargeData = {
  infoData: [
    {
      name: "Call Us Now",
      value: "768-878-878",
      icon: <WifiCalling3Icon className="text-fulvous !w-[2rem] !h-[2rem]" />,
    },
    {
      name: "Email Now",
      value: "info.hgfag@gmail.com",
      icon: (
        <MarkEmailUnreadIcon className="text-fulvous  !w-[2rem] !h-[2rem]" />
      ),
    },
    {
      name: "Hawk street",
      value: "New York, USA-2386",
      icon: <LocationOnIcon className="text-fulvous  !w-[2rem] !h-[2rem]" />,
    },
  ],
};
