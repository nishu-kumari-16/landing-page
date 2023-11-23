import { Typography } from "@mui/material";
import FadeInWhenVisible from "../fade-in-visible";
import { partners } from "./meta";
import Button from "../button";
import { ArrowForward } from "@mui/icons-material";
import { ReactComponent as Partner } from "../../assets/icons/become-partner.svg";

const BecomePartner = () => {
  return (
    <FadeInWhenVisible>
      <div className="px-4 tablet:px-[8rem] flex flex-col gap-6 flex-1 z-10  py-[4rem] relative">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Typography fontSize={24} className="text-fulvous !font-semibold">
            {` /// BECOME OUR PARTNER`}
          </Typography>
          <div className="text-charcoalGray font-medium text-md text-center w-full tablet:w-[50%] z-10 text-xs">
            Empowering partnerships and fostering teamwork to achieve
            unparalleled excellence. Our dedicated approach and shared vision
            create a synergy that fuels innovation and drives sustainable
            success for all.
          </div>
        </div>
        <div className=" flex justify-between gap-1 items-center">
          <div className="flex-1 flex tablet:flex-row flex-col gap-4 max-h-[100px] justify-center  items-center">
            {partners.map((data, index) => (
              <div
                className="flex flex-1 h-[100%] items-center justify-center p-2 rounded-lg shadow-lg h-fit bg-white"
                key={index}
              >
                <img src={data} alt="data" className="h-[3rem]" />
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-col items-center flex-1 justify-center">
            <Partner className="h-[200px] w-[200px]" />
            <Button
              className="!bg-fulvous !text-white h-[48px] !rounded-lg !text-sm !capitalize !px-8"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.govahanpartner.com"
                )
              }
            >
              Become a partner
              <ArrowForward />
            </Button>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
export default BecomePartner;
