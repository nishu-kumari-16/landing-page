import { Typography } from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { fetchData, getDriveUrl } from "../../helpers/utils";
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";

const OurExpertDrivers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: {
        origin: "auto",
        perView: 4,
        spacing: 16,
      },
      breakpoints: {
        "(max-width: 900px)": {
          slides: {
            origin: "auto",
            perView: 3,
            spacing: 16,
          },
        },
        "(max-width: 700px)": {
          slides: {
            origin: "auto",
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

  const [ourDrivers, setDriversData] = useState<any>();
  const convertToDesiredFormat = async () => {
    const url =
      "https://docs.google.com/spreadsheets/d/1-2ahnXE-f9w5VZDvVHr1jSepT6546xFqdaqKHFXDOQs/edit?usp=sharing";
    const data = await fetchData(url, 0);
    const result = data?.slice(1).map((item: any) => ({
      id: item.A || "",
      name: item.B || "",
      image: getDriveUrl(item.C) || "",
      vehicle: item.D || "",
    }));
    setDriversData(result);
  };

  useEffect(() => {
    convertToDesiredFormat();
  }, []);

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
        {/* <button
          onClick={() => keenSlider.current?.prev()}
          className=" absolute top-[45%] rounded-full z-[2] h-[3rem] min-w-[3rem] left-[-2rem] flex justify-center items-center  bg-fulvous transition  hover:text-white"
        >
          <ArrowBackIosNewIcon className="text-white" />
        </button> */}
        {ourDrivers?.length ? (
          <div ref={sliderRef} className="keen-slider pb-6">
            {ourDrivers?.map((data: any, index: number) => (
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
        ) : (
          <Loader />
        )}
        {loaded && keenSlider.current && (
          <div className="flex justify-center px-10">
            {[
              ...Array(keenSlider.current.track.details.slides.length).keys(),
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
        {/* <button
          onClick={() => keenSlider.current?.next()}
          className="rounded-full absolute right-[-2rem] top-[45%]  h-[3rem] min-w-[3rem]  bg-fulvous transition  hover:text-white"
        >
          <ArrowForwardIosIcon className="text-white" />
        </button> */}
      </div>
    </div>
  );
};
export default OurExpertDrivers;
