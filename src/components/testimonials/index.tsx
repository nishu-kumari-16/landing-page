import { useKeenSlider } from "keen-slider/react";
import TestimonialsCard from "./TestimonialCard";
import { ReactComponent as TestimonialsIllustration } from "../../assets/icons/tetsimonials.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { testimonialsMetaData } from "./meta";
import { Typography } from "@mui/material";
import FadeInWhenVisible from "../fade-in-visible";
import { useState } from "react";
import WhyRideWithRidek from "../why-ride-with-ridek";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>({
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
  });

  return (
    <section className="bg-mistGray relative pr-4 tablet:pr-[8rem]">
      <div className="mx-[1.5rem] tablet:mx-[6rem]  px-4  sm:px-6 tablet:me-0 tablet:pe-0 tablet:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-2 tablet:items-center tablet:gap-16">
          <div className="max-w- ltr:sm:text-left rtl:sm:text-right gap-4 flex flex-col pt-12 pb-12">
            <Typography
              className="text-yellow "
              fontSize={13}
            >{`/// CLIENTS TESTIMONIAL`}</Typography>
            <Typography fontSize={24}>Ridek Passenger Reviews...</Typography>
            <Typography fontSize={12} className="text-cloudyGray">
              We successfully cope with tasks of varying complexity, provide
              long-term guarantees and regularly master technologies.
            </Typography>
            <div ref={sliderRef} className="keen-slider">
              {testimonialsMetaData.map((data, index) => (
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
                        currentSlide === idx && " !bg-yellow"
                      }`}
                    ></button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="-mx-6 tablet:col-span-1  tablet:mx-0 h-full">
            <WhyRideWithRidek />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
