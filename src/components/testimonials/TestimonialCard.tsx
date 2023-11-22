import { Rating, Typography } from "@mui/material";
import { ReactComponent as Parallelogram } from "../../assets/icons/parallelogram.svg";
import { ReactComponent as DoubleQuotes } from "../../assets/icons/double-quotes.svg";

const TestimonialsCard = ({ profile, name, rating, review }: any) => {
  return (
    <div className=" relative gap-4 rounded-lg shadow-lg z-10 mt-8 keen-slider__slide max-w-[500px] flex h-auto flex-col !overflow-visible bg-white border border-gray  p-6 sm:p-8 lg:p-12">
      <Typography className="!text-xs !leading-6 !text-cloudyGray">
        {review}
      </Typography>
      <div className="flex gap-4 items-center">
        <img
          src={profile}
          alt="img"
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <Rating value={rating} size="small" disabled />
          <Typography className="!text-sm !font-bold">{name}</Typography>
        </div>
      </div>
      <div className="absolute top-[-1rem] right-8">
        <Parallelogram className="h-[2.5rem]" />
        <DoubleQuotes className="w-3 h-3 absolute top-3 right-[10px]" />
      </div>
    </div>
  );
};
export default TestimonialsCard;
