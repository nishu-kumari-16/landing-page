import { Typography } from "@mui/material";
import FadeInWhenVisible from "../fade-in-visible";
import { newsData } from "./meta";
import NewsCard from "./card";

const NewsAndInsights = () => {
  return (
    <FadeInWhenVisible>
      <div className="px-4 tablet:px-[8rem] flex flex-col gap-6 flex-1 mt-12 z-10 bg-mistGray py-[4rem] relative">
        <div className="flex flex-col gap-2 justify-center items-center">
          <Typography fontSize={14} className="text-yellow !font-semibold">
            {` /// RECENT POSTS!`}
          </Typography>
          <div className="text-black font-bold text-[2rem] text-center relative z-[3]">
            News And Insights!
          </div>
          <div className="text-charcoalGray font-medium text-md text-center w-full tablet:w-[50%] z-10">
            We successfully cope with tasks of varying complexity, provide
            long-term guarantee and regularly master new technologies.
          </div>
          <div className="flex flex-wrap gap-6">
            {newsData.map((data, index) => (
              <NewsCard {...data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
export default NewsAndInsights;
