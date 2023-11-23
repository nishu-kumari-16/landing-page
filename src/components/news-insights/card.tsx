import { Typography } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarMonthOutlined, Person2Outlined } from "@mui/icons-material";

const NewsCard = ({
  image,
  title,
  type,
  date,
  author,
  description,
  link,
  completeDescription,
}: any) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="flex flex-col keen-slider__slide max-w-[500px]  flex-1 gap-4 rounded-md bg-white shadow-sm">
      <img
        src={image}
        className="h-[200px] object-cover relative"
        alt={image}
      />

      <div className="flex flex-col flex-1 gap-4 px-4 pb-4 relative">
        <Typography
          fontSize={14}
          className="absolute !uppercase top-[-3.25rem] left-0 px-4 py-2 text-white z-2 bg-fulvous"
        >
          {type}
        </Typography>
        <div className="flex gap-4 w-full">
          <Typography
            fontSize={12}
            className=" text-black flex gap-1 items-center"
          >
            <CalendarMonthOutlined className="!w-4 !h-4 text-fulvous" />
            {date}
          </Typography>
          <Typography
            fontSize={12}
            className=" text-black flex gap-1 items-center"
          >
            <Person2Outlined className="!w-4 !h-4 text-fulvous" />
            {author}
          </Typography>
        </div>

        <Typography fontSize={18} fontWeight={500} className=" text-black">
          {title}
        </Typography>
        {!expanded && (
          <Typography fontSize={14} className=" text-darkGray">
            {description}
          </Typography>
        )}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <Typography fontSize={14} className=" text-darkGray">
                {completeDescription}
              </Typography>
            </motion.section>
          )}
        </AnimatePresence>
        <div
          className="text-fulvous text-md py-1 cursor-pointer flex flex-1 items-end"
          onClick={() => window.open(link, "_blank")}
        >
          Read More
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
