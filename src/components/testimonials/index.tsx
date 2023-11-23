import { useKeenSlider } from "keen-slider/react";
import TestimonialsCard from "./TestimonialCard";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import WhyRideWithRidek from "../why-ride-with-ridek";
import { fetchData, getDriveUrl } from "../../helpers/utils";
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";
import FadeInWhenVisible from "../fade-in-visible";

const Testimonials = () => {
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
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
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

  const [testimonialsMetaData, setTestimonialsMetaData] = useState<any>();
  const convertToDesiredFormat = async () => {
    const url =
      "https://docs.google.com/spreadsheets/d/1sFizOrV6oJniLIwb8Qz3SNaEoue1JxlPCeOO5Ykue3I/edit?usp=sharing";
    const data = await fetchData(url, 0);
    const result = data?.slice(1).map((item: any) => ({
      id: item.A || "",
      rating: item.B || "",
      name: item.C || "",
      review: item.D || "",
      profile: getDriveUrl(item.E) || "",
    }));
    setTestimonialsMetaData(result);
  };

  useEffect(() => {
    convertToDesiredFormat();
  }, []);

  return (
    <FadeInWhenVisible>
      <section className="bg-mistGray relative pr-4 tablet:pr-[8rem]">
        <div className="mx-[1.5rem] tablet:mx-[6rem]  px-4  sm:px-6 tablet:me-0 tablet:pe-0 tablet:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2 tablet:items-center tablet:gap-16">
            <div className="max-w- ltr:sm:text-left rtl:sm:text-right gap-4 flex flex-col pt-12 pb-12">
              <Typography
                className="text-fulvous "
                fontSize={13}
              >{`/// CLIENTS TESTIMONIAL`}</Typography>
              <Typography fontSize={24}>
                Govahan Passenger Reviews...
              </Typography>
              <Typography fontSize={12} className="text-cloudyGray">
                We successfully cope with tasks of varying complexity, provide
                long-term guarantees and regularly master technologies.
              </Typography>
              {testimonialsMetaData?.length ? (
                <React.Fragment>
                  <div ref={sliderRef} className="keen-slider">
                    {testimonialsMetaData?.map((data: any, index: number) => (
                      <TestimonialsCard {...data} key={index} />
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
            </div>

            <div className="-mx-6 tablet:col-span-1  tablet:mx-0 h-full">
              <WhyRideWithRidek />
            </div>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
};
export default Testimonials;
