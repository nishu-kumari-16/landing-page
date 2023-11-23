import { Typography } from "@mui/material";
import FadeInWhenVisible from "../fade-in-visible";
import NewsCard from "./card";
import React, { useEffect, useState } from "react";
import { fetchData, getDriveUrl } from "../../helpers/utils";
import { useKeenSlider } from "keen-slider/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";

const NewsAndInsights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 3,
        spacing: 16,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
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
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const [newsData, setNewsData] = useState<any>();
  const convertToDesiredFormat = async () => {
    const url =
      "https://docs.google.com/spreadsheets/d/19iSN5IH_bClpC3MAk6bR1kt1x5kpwV3k75yYzmmfd4c/edit?usp=sharing";
    const data = await fetchData(url, 0);
    const result = data.slice(1).map((item: any) => ({
      type: item.B || "",
      date: item.C || "",
      author: item.D || "",
      title: item.E || "",
      description: item.F || "",
      completeDescription: item.F ? item.F.slice(0, 100) : "",
      image: getDriveUrl(item.G) || "",
      link: item.H || "",
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
            {/* <button
              onClick={() => keenSlider.current?.prev()}
              className=" absolute top-[45%] rounded-full z-[2] h-[3rem] min-w-[3rem] left-0 flex justify-center items-center  bg-fulvous transition  hover:text-white"
            >
              <ArrowBackIosNewIcon className="text-white" />
            </button> */}
            {newsData ? (
              <React.Fragment>
                <div className="keen-slider pb-6" ref={sliderRef}>
                  {newsData?.map((data: any, index: number) => (
                    <NewsCard {...data} key={index} />
                  ))}
                </div>
                {loaded && keenSlider.current && (
                  <div className="flex justify-center px-10">
                    {[
                      ...Array(
                        keenSlider.current.track.details.slides.length
                      ).keys(),
                    ].map((value, idx) => {
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            keenSlider.current?.moveToIdx(idx);
                          }}
                          className={`border-none w-2 h-2 bg-gray p-1 mx-1 rounded-full cursor-pointer z-10 ${
                            currentSlide === idx && " !bg-fulvous"
                          }`}
                        ></button>
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
            ) : (
              <Loader />
            )}

            {/* <button
              onClick={() => keenSlider.current?.next()}
              className="rounded-full absolute right-[-1rem] top-[45%]  h-[3rem] min-w-[3rem]  bg-fulvous transition  hover:text-white"
            >
              <ArrowForwardIosIcon className="text-white" />
            </button> */}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
export default NewsAndInsights;
