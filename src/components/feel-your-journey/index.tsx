import { Typography } from "@mui/material";
import ManWithPhone from "../../assets/icons/man-with-phone.png";
import colorPalette from "../../helpers/color-palette";
import Button from "../button";
import { feelYourJourneyData } from "./meta";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const FeelYourJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-fulvous w-full tablet:w-[80%]  relative">
      <div className="flex  backdrop-brightness-90 gap-6 w-full flex-wrap py-[3rem] tablet:px-[8rem] px-4 tablet:z-0 z-[2]">
        <div className="flex flex-col gap-4">
          <Typography fontSize={14} color={colorPalette.codGray}>
            GOVAHAN TRANSPORT SERVICES!
          </Typography>
          <Typography fontSize={24} fontWeight={700} color={colorPalette.white}>
            Feel Your journey with Go Vahan!
          </Typography>
          <Button
            className="!bg-black !px-6 !w-fit !text-white !capitalize"
            onClick={() => {
              navigate("/", { state: { isNavigated: true } });
            }}
          >
            Book a Ride
          </Button>
        </div>
        <div className="flex flex-col gap-4 z-[3]  ">
          {feelYourJourneyData.map((data, index) => (
            <div className="flex gap-4 items-center" key={index}>
              <div className="flex justify-center items-center !h-8 bg-black rounded-sm p-2 text-fulvous">
                <ArrowForwardIos className="!w-4 !h-4" />
              </div>
              <Typography fontSize={14} color={colorPalette.white}>
                {data}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <img
        src={ManWithPhone}
        className="bottom-0 right-[-45%] tablet:right-auto  tablet:left-[82%] absolute"
        alt="man-with-phone"
      />
    </div>
  );
};
export default FeelYourJourney;
