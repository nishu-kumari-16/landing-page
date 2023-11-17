import { Typography } from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import { ourDrivers } from "./meta";
import { useKeenSlider } from "keen-slider/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const OurExpertDrivers = () => {
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "auto",
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 900px)": {
        slides: {
          origin: "center",
          perView: 3,
          spacing: 16,
        },
      },
      "(max-width: 700px)": {
        slides: {
          origin: "center",
          perView: 1,
          spacing: 16,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-6 justify-center items-center px-8 tablet:gap-6 tablet:px-[8rem] py-[5rem]">
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

      <div className="relative w-full">
        <button
          onClick={() => keenSlider.current?.prev()}
          className=" absolute top-[45%] rounded-full z-[2] h-[3rem] min-w-[3rem] left-[-2rem] flex justify-center items-center  bg-fulvous transition  hover:text-white"
        >
          <ArrowBackIosNewIcon className="text-white" />
        </button>
        <div ref={sliderRef} className="keen-slider">
          {ourDrivers.map((data, index: number) => (
            <div
              className="flex flex-col relative keen-slider__slide max-w-[500px]  flex-1 rounded-lg"
              key={index}
            >
              <img
                src={data.image}
                className="h-[300px] object-cover w-full"
                alt="img"
              />
              <Typography
                fontSize={14}
                className="py-2 rounded-md bg-fulvous !mx-4 !mt-[-1rem] text-center"
              >
                {data.name}
              </Typography>
              <Typography
                fontSize={13}
                className="py-2 rounded-md bg-black text-white !mx-8 !mt-[-0.5rem] text-center"
              >
                {data.vehicle}
              </Typography>
            </div>
          ))}
        </div>
        <button
          onClick={() => keenSlider.current?.next()}
          className="rounded-full absolute right-[-2rem] top-[45%]  h-[3rem] min-w-[3rem]  bg-fulvous transition  hover:text-white"
        >
          <ArrowForwardIosIcon className="text-white" />
        </button>
      </div>
    </div>
  );
};
export default OurExpertDrivers;
