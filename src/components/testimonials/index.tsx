import { useKeenSlider } from "keen-slider/react";
import TestimonialsCard from "./TestimonialCard";
import { ReactComponent as TestimonialsIllustration } from "../../assets/icons/tetsimonials.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { testimonialsMetaData } from "./meta";
import { Typography } from "@mui/material";
import FadeInWhenVisible from "../fade-in-visible";

const Testimonials = () => {
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  });

  return (
    <section className="bg-mistGray pt-[4rem] relative">
      <div className="text-verDarkViolet font-bold upper text-[2rem] text-center">
        TESTIMONIALS
      </div>
      <div className="mx-[1.5rem] tablet:mx-[6rem]  px-4 py-12 sm:px-6 tablet:me-0 tablet:py-16 tablet:pe-0 tablet:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 tablet:grid-cols-3 tablet:items-center tablet:gap-16">
          <div className="max-w- ltr:sm:text-left rtl:sm:text-right gap-4 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl z-10 relative">
              Don't just take our word for it...
            </h2>
            <FadeInWhenVisible>
              <TestimonialsIllustration className="absolute bottom-[-50%] left-[-5%] w-[35%] opacity-[0.7]" />
            </FadeInWhenVisible>

            <Typography className="mt-4 !text-md !font-medium z-10 relative">
              Listen from our clients
            </Typography>

            <div className="tablet:flex hidden tablet:gap-4 z-10 relative ">
              <button
                onClick={() => keenSlider.current?.prev()}
                className="rounded-full border border-darkViolet p-3 text- transition hover:bg-darkViolet hover:text-white"
              >
                <ArrowBackIosNewIcon />
              </button>

              <button
                onClick={() => keenSlider.current?.next()}
                className="rounded-full border border-darkViolet p-3 text-darkViolet transition hover:bg-darkViolet hover:text-white"
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>

          <div className="-mx-6 tablet:col-span-2 tablet:mx-0">
            <div ref={sliderRef} className="keen-slider p-4">
              {testimonialsMetaData.map((data, index) => (
                <TestimonialsCard {...data} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4 tablet:hidden pb-4">
        <button
          onClick={() => keenSlider.current?.prev()}
          className="rounded-full border border-darkViolet p-4 text-darkViolet transition hover:bg-darkViolet hover:text-white"
        >
          <ArrowBackIosNewIcon />
        </button>

        <button
          onClick={() => keenSlider.current?.next()}
          className="rounded-full border border-darkViolet p-4 text-darkViolet transition hover:bg-darkViolet hover:text-white"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </section>
  );
};
export default Testimonials;
