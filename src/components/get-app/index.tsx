import { Typography } from "@mui/material";
import { metaData } from "./meta";
import Illustration from "../../assets/icons/get-app.png";
import { ReactComponent as PlayStore } from "../../assets/icons/play-store.svg";
import { ReactComponent as AppleStore } from "../../assets/icons/apple-store.svg";
import colorPalette from "../../helpers/color-palette";

const GetApp = () => {
  return (
    <div className="flex px-4 tablet:px-[8rem] py-[5rem] relative">
      <div className="flex flex-col gap-4 w-[40%]">
        <Typography
          fontSize={13}
          color={colorPalette.yellow}
        >{`/// ONLINE BOOKING`}</Typography>
        <Typography fontSize={28} className="!font-semibold">
          Get the Ridek Mobile App and Start Your Journey!
        </Typography>

        <Typography fontSize={12} className="text-darkGray">
          We successfully cope with tasks of varying complexity, provide
          long-term guarantees and regularly master technologies
        </Typography>
        <div className="flex gap-6">
          {metaData.map((data, index) => (
            <div className="flex gap-2 flex-col">
              {data.image}
              <Typography fontSize={12}>{data.name}</Typography>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <PlayStore className="cursor-pointer" />
          <AppleStore className="cursor-pointer" />
        </div>
      </div>
      <div className="flex-2">
        <img
          src={Illustration}
          className="absolute right-0 bottom-[-2rem] w-[50%]"
          alt="illustration"
        />
      </div>
    </div>
  );
};
export default GetApp;
