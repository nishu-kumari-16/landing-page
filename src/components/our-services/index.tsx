import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ourServiceData } from "./meta";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LuggageIcon from "@mui/icons-material/Luggage";
import StadiumIcon from "@mui/icons-material/Stadium";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [currentData, setCurrentData] = useState<any>();

  useEffect(() => {
    setCurrentData(ourServiceData[activeIndex]);
  }, [activeIndex]);

  return (
    <div className="flex flex-col py-[5rem] px-4 tablet:px-[8rem] bg-mistGray">
      <header className="text-center mx-auto mb-12 tablet:px-20">
        <Typography fontSize={14} className="!font-medium !text-yellow">
          OUR SERVICES
        </Typography>
        <Typography fontSize={28} className="!font-medium ">
          BEST SOLUTIONS HERE
        </Typography>
      </header>
      <div className="flex gap-6">
        <div
          className={`flex-1 text-center p-2 bg-black text-white rounded-sm !font-medium cursor-pointer ${
            activeIndex === 0 && "bg-yellow"
          }`}
          onClick={() => setActiveIndex(0)}
        >
          CABS
        </div>
        <div
          className={`flex-1 text-center p-2 bg-black rounded-sm text-white cursor-pointer !font-medium ${
            activeIndex === 1 && "bg-yellow"
          }`}
          onClick={() => setActiveIndex(1)}
        >
          TRANSPORT
        </div>
      </div>

      {currentData && (
        <div className="flex flex-wrap gap-4 border tablet:flex-row flex-col border-mutedGray shadow-sm rounded-lg p-6 my-6">
          <div className="flex flex-col gap-2 flex-1 justify-center">
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full bg-black">
                <PeopleOutlineIcon className="text-yellow" />
              </div>
              <Typography fontSize={14}>
                Passengers : {currentData.passengers}
              </Typography>
            </div>
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full bg-black">
                <LuggageIcon className="text-yellow" />
              </div>
              <Typography fontSize={14}>
                Luggage Carry : {currentData.luggageCarry}
              </Typography>
            </div>
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full bg-black">
                <StadiumIcon className="text-yellow" />
              </div>
              <Typography fontSize={14}>
                Heated Seats : {currentData.heatedSeats}
              </Typography>
            </div>
            <div className="flex gap-4 items-center">
              <div className="p-2 rounded-full bg-black">
                <AcUnitIcon className="text-yellow" />
              </div>
              <Typography fontSize={14}>
                Air Condition : {currentData.airCondition}
              </Typography>
            </div>
          </div>
          <img
            src={currentData.image}
            alt="img"
            className="w-full tablet:w-[30%] flex-1"
          />
          <div className="flex flex-col gap-2 flex-1 justify-center">
            <Typography fontSize={24}>{currentData.title}</Typography>
            <Typography fontSize={14} className="text-darkGray">
              {currentData.description}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;
