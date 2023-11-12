import Layout from "../../components/layout";
import { Typography } from "@mui/material";
import AboutUsImage from "../../assets/icons/about-us-baneer.jpg";
import { ReactComponent as AboutUsSvg } from "../../assets/icons/about-us.svg";
import ParagraphRenderer from "../../components/paragraph-renderer";
import { aboutUsMetaData } from "./meta";

const AboutUs = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-8 ">
        <div className="relative ">
          <img
            src={AboutUsImage}
            alt="about us banner"
            className="h-[250px] mt-[5rem] opacity-[0.8] w-full"
          />
          <Typography
            fontSize={30}
            fontWeight={600}
            className="text-fulvous backdrop-brightness-90 absolute top-[30%] left-0 right-0 bottom-0 flex justify-start items-center pl-8 bg-[rgba(0,0,0,0.5)] "
          >
            ABOUT US
          </Typography>
        </div>
      </div>
      <div className="flex gap-4 m-4 tablet:m-[3rem] tablet:flex-row flex-col">
        <AboutUsSvg className="flex-1" />
        <div className="self-center p-8 flex-1 shadow-md rounded-lg bg-solitudeGray">
          <ParagraphRenderer text={aboutUsMetaData} />
        </div>
      </div>
    </Layout>
  );
};
export default AboutUs;
