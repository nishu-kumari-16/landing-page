import { motion } from "framer-motion";
import SearchBackground from "../../assets/icons/bg-shorten-desktop.svg";
import ComponentSlider from "../component-slider";
import { heroSectionImages } from "./meta";
import { useEffect, useState } from "react";
import { fetchData, getDriveUrl } from "../../helpers/utils";

const HeroSection = () => {
  const [images, setImages] = useState<any>(heroSectionImages);
  const convertToDesiredFormat = async () => {
    const url =
      "https://docs.google.com/spreadsheets/d/1z8DsULZIJ86-VGFNV03vZnvddSPpJqi6zhZti6MS_AI/edit?usp=sharing";
    const data = await fetchData(url, 0);
    const result = data.slice(1).map((item: any) => {
      return getDriveUrl(item.B);
    });
    setImages(result);
  };

  useEffect(() => {
    convertToDesiredFormat();
  }, []);

  return (
    <div className="flex flex-col-reverse tablet:flex-row relative py-[6rem] tablet:pt-[5rem] pt-[4.5rem] tablet:py-[5rem] mt-0 tablet:mt-[10rem]  text-center tablet:text-left gap-4 bg-[#1E3446]">
      <img
        src={SearchBackground}
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        alt="search-bg"
      />
      <div className="flex flex-col gap-4 tablet:gap-6 w-full tablet:w-[50%] justify-center items-center tablet:items-start tablet:pr-0 pr-[1.5rem] pl-[1.5rem] tablet:pl-[6rem]">
        <motion.div
          initial={{ opacity: 0, x: "-100vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-2 z-[9] pb-8"
        >
          <div className="text-white !font-medium !text-lg text-left">
            Travel Securely With Us!
          </div>
          <div className="text-white text-[2rem] tablet:text-[4rem] font-medium leading-[2.25rem] tablet:leading-[4.5rem] text-left">
            Book your vehicle from anywhere today!
          </div>
          <div className="text-mutedGray text-md font-medium w-full tablet:w-[80%] text-left">
            Everything your taxi business needs is already here! Go Vahan made
            for taxi service companies
          </div>

          <button
            className="text-white text-sm bg-fulvous border-none rounded-sm px-12 py-4 w-fit mt-4
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
        className="flex-1 mr-[0] self-center h-fit z-[3] tablet:w-[50%] w-full"
      >
        <ComponentSlider
          components={images.map((data: any, index: number) => (
            <img
              src={data}
              className="max-h-[806px] max-w-[800px] keen-slider__slide object-contain"
              key={index}
              alt={data}
            />
          ))}
        />
      </motion.div>
    </div>
  );
};
export default HeroSection;
