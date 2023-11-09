import { motion } from "framer-motion";
import SearchBackground from "../../assets/icons/bg-shorten-desktop.svg";
import ComponentSlider from "../component-slider";
import { heroSectionImages } from "./meta";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row relative py-[6rem] tablet:py-[12rem] mt-0 tablet:mt-[10rem]  text-center tablet:text-left gap-4 bg-darkViolet">
      <img
        src={SearchBackground}
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        alt="search-bg"
      />
      <div className="flex flex-col gap-4 w-full tablet:w-[50%] justify-center items-center tablet:items-start tablet:pr-0 pr-[1.5rem] pl-[1.5rem] tablet:pl-[6rem]">
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-2"
        >
          <div className="text-white !font-medium !text-lg text-left">
            Travel Securely With Us!
          </div>
          <div className="text-white text-[2rem] tablet:text-[4rem] font-semibold leading-[2.25rem] tablet:leading-[4.5rem] text-left">
            Book your vehicle from anywhere today!
          </div>
          <div className="text-mutedGray text-md font-medium w-full tablet:w-[80%] text-left">
            Everything your taxi business needs is already here! Go Vahan made
            for taxi service companies
          </div>

          <button
            className="text-white text-sm bg-yellow border-none rounded-sm px-12 py-4 w-fit mt-4
             font-medium hover:cursor-pointer hover:opacity-[0.8]"
          >
            Book Now
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: "200vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 tablet:mr-[-40%] laptop:mr-[-10%] mr-[0] self-center h-fit z-[3] relative tablet:absolute top-0 right-0 tablet:top-[8rem] tablet:right-[-30%] w-full"
      >
        <ComponentSlider components={heroSectionImages} />
      </motion.div>
    </div>
  );
};
export default HeroSection;
