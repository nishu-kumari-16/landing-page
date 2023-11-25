import { Button, Typography } from "@mui/material";
import FadeInWhenVisible from "../fade-in-visible";
import { metaData } from "./meta";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useState } from "react";

const Card = ({
  name,
  description,
  image,
  completeDescription,
  extraDescription,
}: any) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4 h-fit bg-white rounded-md flex-1 relative max-w-[600px]  overflow-hidden pb-6">
      <img
        src={image}
        alt="icon"
        className="w-full h-[10rem] object-cover bg-[#2c4b64]"
      />
      <div className="text-verDarkViolet font-extrabold  px-4">{name}</div>
      <div className="text-darkGray font-medium text-xs leading-5 px-4">
        {description}
      </div>
      {isExpanded && (
        <div className="text-darkGray font-medium text-xs leading-5 px-4">
          {completeDescription}
        </div>
      )}
      {isExpanded && (
        <div className="text-darkGray font-medium text-xs leading-5 px-4">
          {extraDescription}
        </div>
      )}
      <Button
        className="!bg-fulvous !capitalize w-fit !text-white !ml-4"
        variant="contained"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Read More
      </Button>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <FadeInWhenVisible>
      <div className="px-[1rem] tablet:px-[8rem] flex flex-col gap-6 flex-1  z-10 bg-[#1E3446] pt-6 relative">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Typography fontSize={14} className="text-fulvous !font-semibold ">
            {` /// WHAT WE OFFER`}
          </Typography>
          <div className="text-white font-bold text-[2rem] text-center relative z-[3]">
            Start your journey with Go vahan Company!
          </div>
          <div className="text-frost font-medium text-md text-center w-full tablet:w-[60%] z-10">
            We successFully cope with tasks of varying complexity, provide
            long-term guarantee and regularly master new technologies.
          </div>
        </div>
        <div className="block tablet:px-8 px-0  relative z-[2]">
          <div className="flex gap-6 p-4 justify-center items-center tablet:items-start tablet:flex-row flex-col">
            {metaData?.map((data, index) => (
              <Card key={index} {...data} />
            ))}
          </div>
        </div>
        <div className="bg-gray absolute h-[250px] bottom-0 left-0 right-0"></div>
      </div>
    </FadeInWhenVisible>
  );
};
export default WhatWeOffer;
