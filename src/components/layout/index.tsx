import { useEffect, useRef, useState } from "react";
import ContactUs from "../contact-us";
import GetInTouch from "../get-in-touch";
import Header from "../header";
import OurServices from "../our-services";
import Testimonials from "../testimonials";
import AdvancedStatistics from "../url-shortener/advancedStatistics";
import BoostLinks from "../url-shortener/boostLink";
import Footer from "../url-shortener/footer";
import HeroSection from "../url-shortener/heroSection";
import SearchContainer from "../url-shortener/search";
import Button from "../button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "../fade-in-visible";

const Layout = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsvisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setIsvisible(true) : setIsvisible(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      ref={ref}
      id="hello"
      className="flex flex-col h-full bg-white overflow-y-overlay overflow-x-hidden ::webkit-scrollbar-hidden"
    >
      <Header />
      <HeroSection />
      <div className="bg-gray h-fit pb-[4rem] flex flex-col gap-[4rem]">
        <SearchContainer />
      </div>
      <OurServices />
      <Testimonials />
      <GetInTouch />
      <ContactUs />
      {/* <BoostLinks /> */}
      <Footer />
      {isVisible && (
        <Button
          className="!w-10 !h-10 !min-w-0 !rounded-full !bg-darkViolet !fixed bottom-5 right-5 !text-white"
          onClick={() => {
            ref.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowUpwardIcon />
        </Button>
      )}
    </div>
  );
};
export default Layout;
