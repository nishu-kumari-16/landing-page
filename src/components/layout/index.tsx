import { useEffect, useRef, useState } from "react";
import Header from "../header";
import Footer from "../url-shortener/footer";
import HeroSection from "../hero-section";
import Button from "../button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HeaderLarge from "../header-large";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsvisible] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsvisible(true) : setIsvisible(false);
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
      {!isVisible &&
      window.innerWidth > 800 &&
      ["/", "/home"].includes(pathname) ? (
        <HeaderLarge />
      ) : (
        <Header />
      )}
      {children}
      <Footer />
      {isVisible && (
        <Button
          className="!w-10 !h-10 !min-w-0 !rounded-full !bg-fulvous !fixed bottom-5 right-5 !text-white"
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
