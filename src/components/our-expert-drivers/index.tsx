import { Typography } from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import { ourDrivers } from "./meta";

const OurExpertDrivers = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center px-4 tablet:gap-6 tablet:px-[8rem] py-[5rem]">
      <Typography
        fontSize={14}
        color={colorPalette.fulvous}
      >{`/// LETS GO WITH US!`}</Typography>
      <Typography fontSize={24} color={colorPalette.black}>
        Our Expert Drivers
      </Typography>
      <Typography
        fontSize={15}
        fontWeight={400}
        className="w-[60%] text-center"
        color={colorPalette.gray}
      >
        We successfully cope with tasks of varying complexity, provide long-term
        guarantees and regularly master new technologies.
      </Typography>

      <div className="flex flex-wrap gap-[5rem] tablet:gap-4 tablet:flex-row flex-col">
        {ourDrivers.map((data, index) => (
          <div className="flex relative  flex-1 rounded-lg" key={index}>
            <img
              src={data.image}
              className="h-[300px] object-cover"
              alt="ima"
            />
            <Typography
              fontSize={14}
              className="py-2 mx-6 rounded-md bg-fulvous absolute bottom-[-1rem] left-4 right-4 text-center"
            >
              {data.name}
            </Typography>
            <Typography
              fontSize={13}
              className="py-2 mx-6 rounded-md bg-black text-white absolute bottom-[-3rem] left-8 right-8 text-center"
            >
              {data.vehicle}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurExpertDrivers;
