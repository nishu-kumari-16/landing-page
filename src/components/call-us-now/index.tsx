import { Typography } from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import Phone from "@mui/icons-material/Phone";
import ManOnPhone from "../../assets/icons/man-with-phone.png";
import { ReactComponent as Triangle } from "../../assets/icons/triangle.svg";

const CallUsNow = () => {
  return (
    <div className="flex px-4 tablet:px-[8rem] bg-black py-[5rem] relative">
      <div className="flex flex-col gap-4 w-full tablet:w-[40%] z-[4]">
        <Typography fontSize={28} color={colorPalette.white} fontWeight={600}>
          Call Us Now <span className="text-fulvous">Book Your Taxi </span>
          For Your Next Ride
        </Typography>
        <Typography
          fontSize={14}
          color={colorPalette.mutedGray}
          fontWeight={500}
        >
          We successfully cope with tasks of varying complexity, guarantees and
          regularly master new technologies.
        </Typography>
        <div className="flex gap-4">
          <div className="flex items-center justify-center p-1 w-[2.5rem] h-[2.5rem] bg-charcoalGray rounded-md">
            <Phone className="text-fulvous " />
          </div>
          <div className="flex flex-col gap-1">
            <Typography fontSize={12} color={colorPalette.white}>
              Call For Taxi
            </Typography>
            <Typography fontSize={20} color={colorPalette.fulvous}>
              5267-214-392
            </Typography>
          </div>
        </div>
      </div>
      <img
        src={ManOnPhone}
        className="w-[60%] tablet:w-[35%] absolute right-0 bottom-0 z-[2]"
        alt="man-on-phone"
      />
      <Triangle className="absolute right-0 bottom-[-4px]  w-[10rem]" />
    </div>
  );
};
export default CallUsNow;
