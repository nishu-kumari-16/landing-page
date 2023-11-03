import { Typography } from "@mui/material";
import RecognitionIcon from "../../assets/icons/icon-brand-recognition.svg";
import RecordIcon from "../../assets/icons/icon-detailed-records.svg";
import CustomizableIcon from "../../assets/icons/icon-fully-customizable.svg";
import FadeInWhenVisible from "../fade-in-visible";

const Card = ({ title, description, icon }: any) => {
  return (
    <div className="flex flex-col p-8 gap-4 bg-white rounded-md flex-1 relative shadow-md">
      <div className="rounded-[50%] w-[4rem] h-[4rem] p-3 bg-yellow absolute  top-[-2rem] flex items-center justify-center ">
        <img src={icon} alt="icon" className="w-[2rem] h-[2rem]" />
      </div>
      <div className="text-verDarkViolet font-extrabold mt-[2rem]">{title}</div>
      <div className="text-darkGray font-medium text-xs leading-5">
        {description}
      </div>
    </div>
  );
};

const statisticsData = [
  {
    title: "Brand Recognition",
    icon: RecognitionIcon,
    description:
      "Boost your brand recognition with each click, Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    title: "Detailed Records",
    icon: RecordIcon,
    description:
      "Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    title: "Fully Customizable",
    icon: CustomizableIcon,
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
  },
];

const AdvancedStatistics = () => {
  return (
    <FadeInWhenVisible>
      <div className="px-[1.5rem] tablet:px-[6rem] flex flex-col gap-6 flex-1 my-12 z-10 bg-darkViolet pt-6">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Typography fontSize={14} className="text-yellow !font-semibold">
            {` /// WHAT WE OFFER`}
          </Typography>
          <div className="text-white font-bold text-[2rem] text-center relative z-[3]">
            Start your journey with Ridek Taxi Company!
          </div>
          <div className="text-frost font-medium text-md text-center w-full tablet:w-[60%] z-10">
            We successFully cope with tasks of varying complexity, provide
            long-term guarantee and regularly master new technologies.
          </div>
        </div>
        <div className="flex gap-8 justify-center pt-[4rem] relative  self-center flex-col tablet:flex-row z-10">
          <div className="tablet:w-full tablet:h-2 h-[calc(100%-8rem)] w-2 bg-cyan absolute top-[4rem] tablet:top-[60%] tablet:left-auto left-[calc(50%-0.5rem)]"></div>
          {statisticsData?.map((data, index) => (
            <div style={{ marginTop: `${index * 2}rem` }}>
              <Card
                title={data.title}
                description={data.description}
                icon={data.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
export default AdvancedStatistics;
