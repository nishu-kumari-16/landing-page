import { Typography } from "@mui/material";
import { metaData } from "./meta";
import Illustration from "../../assets/icons/download-app.png";
import { ReactComponent as PlayStore } from "../../assets/icons/play-store.svg";
import { ReactComponent as AppleStore } from "../../assets/icons/apple-store.svg";
import colorPalette from "../../helpers/color-palette";

const GetApp = () => {
  return (
    <div className="flex px-4 tablet:px-[8rem] py-[5rem] relative">
      <div className="flex flex-col gap-4 w-full tablet:w-[40%]">
        <Typography
          fontSize={13}
          color={colorPalette.fulvous}
        >{`/// ONLINE BOOKING`}</Typography>
        <Typography fontSize={28} className="!font-semibold">
          Get the Govahan Mobile App and Start Your Journey!
        </Typography>

        <Typography fontSize={12} className="text-darkGray">
          We successfully cope with tasks of varying complexity, provide
          long-term guarantees and regularly master technologies
        </Typography>
        <div className="flex gap-6 z-[2]">
          {metaData.map((data, index) => (
            <div className="flex gap-2 flex-col" key={index}>
              {data.image}
              <Typography fontSize={12}>{data.name}</Typography>
            </div>
          ))}
        </div>

        <div className="flex gap-4 z-[12] max-h-[64px]">
          <PlayStore
            className="cursor-pointer w-[216px]"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.govahan.com"
              )
            }
          />

          {/* <AppleStore
            className="cursor-pointer"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.govahan.com"
              )
            }
          /> */}
        </div>
      </div>
      <div className="flex-2">
        <img
          src={Illustration}
          className="absolute right-0 bottom-0 w-[50%]"
          alt="illustration"
        />
      </div>
    </div>
  );
};
export default GetApp;
