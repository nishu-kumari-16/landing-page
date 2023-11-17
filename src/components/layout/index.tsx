import { useEffect, useRef, useState } from "react";
import Header from "../header";
import Button from "../button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import HeaderLarge from "../header-large";
import { useLocation } from "react-router-dom";
import Footer from "../footer";

const Layout = ({ children }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsvisible] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setIsvisible(true) : setIsvisible(false);
    });
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div
      ref={ref}
      id="hello"
      className="flex flex-col h-full bg-white overflow-y-overlay overflow-x-hidden ::webkit-scrollbar-hidden"
    >
      {!isVisible &&
      window.innerWidth > 900 &&
      ["/", "/home"].includes(pathname) ? (
        <HeaderLarge />
      ) : (
        <Header />
      )}
      {children}
      <Footer />
      {isVisible && (
        <Button
          className="!w-10 !h-10 !min-w-0 !rounded-full !bg-fulvous !fixed bottom-5 right-5 !text-white z-[50]"
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
