import HeroImage from "../../assets/icons/hero-illustration-1.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row relative py-[8rem]  text-center tablet:text-left gap-4">
      <div className="flex flex-col gap-4 flex-1 justify-center items-center tablet:items-start tablet:pr-0 pr-[1.5rem] pl-[1.5rem] tablet:pl-[6rem]">
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6"
        >
          <div className="text-veryDarkBlue text-[2rem] tablet:text-[4rem] font-semibold leading-[2.25rem] tablet:leading-[5rem]">
            Book your vehicle from anywhere today!
          </div>
          <div className="text-darkGray text-md font-medium w-full tablet:w-[80%]">
            Everything your taxi business needs is already here! Go Vahan made
            for taxi service companies Everything your taxi business needs is
            already here! Go Vahan made for taxi service companies Everything
            your taxi business needs is already here! Go Vahan made for taxi
            service companies Everything your taxi business needs is already
            here! Go Vahan made for taxi service companies
          </div>

          <button
            className="text-white text-sm bg-darkViolet border-none rounded-[3rem] px-12 py-4 w-fit mt-4
             font-medium hover:cursor-pointer hover:opacity-[0.8]"
          >
            Book Now
          </button>
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0, x: "200vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src={HeroImage}
        className="flex-1 tablet:mr-[-40%] laptop:mr-[-10%] mr-[0] self-center h-fit"
        alt="img"
      />
    </div>
  );
};
export default HeroSection;
