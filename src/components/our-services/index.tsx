import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ourServiceData } from "./meta";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LuggageIcon from "@mui/icons-material/Luggage";
import StadiumIcon from "@mui/icons-material/Stadium";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useKeenSlider } from "keen-slider/react";
import { fetchData, getDriveUrl } from "../../helpers/utils";
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";

const OurServices = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
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
          }, 2000);
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

  const [cabsData, setCabsData] = useState<any>();
  const [transportData, setTransportData] = useState<any>();
  const convertToDesiredFormat = async (type: string) => {
    const url =
      type === "cabs"
        ? "https://docs.google.com/spreadsheets/d/1jCHLenS7LRp0ah5CnBFT4r00mCt5HgAaTyEoVGgoGi0/edit?usp=sharing"
        : "https://docs.google.com/spreadsheets/d/1S2TAabsw-vvCTx9ofucBQ4ydGYhEku4AXRjl1XmVSNk/edit?usp=sharing";
    const data = await fetchData(url, 0);
    const result = data?.slice(1).map((item: any) => ({
      id: item.A || "",
      passengers: item.B || "",
      luggageCarry: item.C || "",
      heatedSeats: item.D || "",
      airCondition: item.E || "",
      title: item.F || "",
      description: item.G || "",
      image: getDriveUrl(item.H) || "",
    }));
    type === "cabs" ? setCabsData(result) : setTransportData(result);
    type === "cabs" && setCurrentData(result);
  };

  useEffect(() => {
    convertToDesiredFormat("cabs");
    convertToDesiredFormat("transport");
  }, []);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [currentArrayData, setCurrentData] = useState<any>(cabsData);

  return (
    <div className="flex flex-col py-[5rem] px-4 tablet:px-[8rem] bg-mistGray">
      <header className="text-center mx-auto mb-12 tablet:px-20">
        <Typography fontSize={14} className="!font-medium !text-fulvous">
          {`/// OUR SERVICES`}
        </Typography>
        <Typography fontSize={28} className="!font-medium ">
          BEST SOLUTIONS HERE
        </Typography>
      </header>
      <div className="flex gap-6">
        <div
          className={`flex-1 text-center p-2 bg-black text-white rounded-sm !font-medium cursor-pointer ${
            activeIndex === 0 && "bg-fulvous"
          }`}
          onClick={() => {
            setActiveIndex(0);
            setCurrentData(cabsData);
          }}
        >
          CABS
        </div>
        <div
          className={`flex-1 text-center p-2 bg-black rounded-sm text-white cursor-pointer !font-medium ${
            activeIndex === 1 && "bg-fulvous"
          }`}
          onClick={() => {
            setActiveIndex(1);
            setCurrentData(transportData);
          }}
        >
          TRANSPORT
        </div>
      </div>

      {currentArrayData ? (
        <div ref={sliderRef} className="keen-slider">
          {currentArrayData.map((currentData: any, index: number) => (
            <div
              className="flex keen-slider__slide flex-wrap gap-4 border tablet:flex-row flex-col border-mutedGray bg-white shadow-sm rounded-lg p-6 my-6"
              key={index}
            >
              <div className="flex flex-col gap-2 flex-1 justify-center">
                <div className="flex gap-4 items-center">
                  <div className="p-2 rounded-full bg-black">
                    <PeopleOutlineIcon className="text-fulvous" />
                  </div>
                  <Typography fontSize={14}>
                    Passengers : {currentData.passengers}
                  </Typography>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-2 rounded-full bg-black">
                    <LuggageIcon className="text-fulvous" />
                  </div>
                  <Typography fontSize={14}>
                    Luggage Carry : {currentData.luggageCarry}
                  </Typography>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-2 rounded-full bg-black">
                    <StadiumIcon className="text-fulvous" />
                  </div>
                  <Typography fontSize={14}>
                    Heated Seats : {currentData.heatedSeats}
                  </Typography>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="p-2 rounded-full bg-black">
                    <AcUnitIcon className="text-fulvous" />
                  </div>
                  <Typography fontSize={14}>
                    Air Condition : {currentData.airCondition}
                  </Typography>
                </div>
              </div>
              <img
                src={currentData.image}
                alt="img"
                className="w-full tablet:w-[30%] flex-1"
              />
              <div className="flex flex-col gap-2 flex-1 justify-center">
                <Typography fontSize={24}>{currentData.title}</Typography>
                <Typography fontSize={14} className="text-darkGray">
                  {currentData.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OurServices;
