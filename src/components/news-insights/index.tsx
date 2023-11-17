import { Typography } from "@mui/material";
import FadeInWhenVisible from "../fade-in-visible";
import NewsCard from "./card";
import { useEffect, useState } from "react";
import { fetchData } from "../../helpers/utils";
import { useKeenSlider } from "keen-slider/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";

const NewsAndInsights = () => {
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 900px)": {
        slides: {
          origin: "center",
          perView: 2,
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

  const [newsData, setNewsData] = useState<any>();
  const convertToDesiredFormat = async () => {
    const url =
      "https://docs.google.com/spreadsheets/d/19iSN5IH_bClpC3MAk6bR1kt1x5kpwV3k75yYzmmfd4c/edit?usp=sharing";
    const data = await fetchData(url);
    const result = data.slice(1).map((item: any) => ({
      type: item.B || "",
      date:
        typeof item.C === "number"
          ? new Date(item.C).toDateString()
          : item.C || "",
      author: item.D || "",
      title: item.E || "",
      description: item.F || "",
      completeDescription: item.F ? item.F.slice(0, 100) : "",
      image: item.G || "",
    }));
    setNewsData(result);
  };

  useEffect(() => {
    convertToDesiredFormat();
  }, []);

  return (
    <FadeInWhenVisible>
      <div className="px-4 tablet:px-[8rem] flex flex-col gap-6 flex-1 mt-12 z-10 bg-mistGray py-[4rem] relative">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Typography fontSize={14} className="text-fulvous !font-semibold">
            {` /// RECENT POSTS!`}
          </Typography>
          <div className="text-black font-bold text-[2rem] text-center relative z-[3]">
            News And Insights!
          </div>
          <div className="text-charcoalGray font-medium text-md text-center w-full tablet:w-[50%] z-10">
            We successfully cope with tasks of varying complexity, provide
            long-term guarantee and regularly master new technologies.
          </div>
          <div className="block px-8 relative z-[2] w-full">
            <button
              onClick={() => keenSlider.current?.prev()}
              className=" absolute top-[45%] rounded-full z-[2] h-[3rem] min-w-[3rem] left-0 flex justify-center items-center  bg-fulvous transition  hover:text-white"
            >
              <ArrowBackIosNewIcon className="text-white" />
            </button>
            {newsData ? (
              <div className="keen-slider" ref={sliderRef}>
                {newsData?.map((data: any, index: number) => (
                  <NewsCard {...data} key={index} />
                ))}
              </div>
            ) : (
              <Loader />
            )}
            <button
              onClick={() => keenSlider.current?.next()}
              className="rounded-full absolute right-[-1rem] top-[45%]  h-[3rem] min-w-[3rem]  bg-fulvous transition  hover:text-white"
            >
              <ArrowForwardIosIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
export default NewsAndInsights;
