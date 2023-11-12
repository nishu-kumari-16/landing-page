import { useKeenSlider } from "keen-slider/react";
import TestimonialsCard from "./TestimonialCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { testimonialsMetaData } from "./meta";
import { Typography } from "@mui/material";
import { useState } from "react";

const ClientSays = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 2,
            spacing: 32,
          },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
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

  return (
    <section className="bg-mistGray pt-[2rem] relative px-4 tablet:px-[8rem]">
      <div className="mx-[1.5rem]  px-4 py-12 sm:px-6 tablet:me-0 tablet:py-16 tablet:pe-0 tablet:ps-8 xl:py-24">
        <div className=" gap-4 flex justify-between pb-8">
          <div className="flex flex-col gap-1">
            <Typography className="text-black" fontSize={14} fontWeight={500}>
              HAPPY CUSTOMER
            </Typography>
            <Typography className="text-black" fontSize={24} fontWeight={600}>
              What Clients say?
            </Typography>
          </div>
          <div className="flex gap-4 z-10 relative ">
            <button
              onClick={() => keenSlider.current?.prev()}
              className="rounded-full max-w-[3rem] max-h-[3rem] h-[3rem] flex justify-center items-center border border-fulvous p-3 text-fulvous transition hover:bg-fulvous hover:text-white"
            >
              <ArrowBackIosNewIcon />
            </button>

            <button
              onClick={() => keenSlider.current?.next()}
              className="rounded-full max-w-[3rem] max-h-[3rem] h-[3rem] flex justify-center items-center border border-fulvous p-3 text-fulvous transition hover:bg-fulvous hover:text-white"
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2 tablet:items-center tablet:gap-16">
          <div className="-mx-6 tablet:col-span-2 tablet:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {testimonialsMetaData.map((data, index) => (
                <TestimonialsCard {...data} key={index} />
              ))}
            </div>
            {loaded && keenSlider.current && (
              <div className="flex justify-center px-10 mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientSays;
