import { FormatQuote } from "@mui/icons-material";
import { Rating, Typography } from "@mui/material";

const TestimonialsCard = ({
  profile,
  name,
  designation,
  rating,
  review,
}: any) => {
  return (
    <div className="flex flex-col gap-[3rem]">
      <div className=" gap-4 keen-slider__slide max-w-[500px] flex h-auto flex-col">
        <div className="flex flex-col relative bg-duskPurple rounded-lg shadow-lg p-6 sm:p-8 lg:p-12 h-auto flex-1 gap-4">
          <FormatQuote className="absolute right-[3rem] top-[60%] translate-y-[-50%] !text-[200px]  opacity-[0.2] text-[#eb6500] " />
          <Rating value={rating} disabled />
          <Typography className="!text-xs text-justify">{review}</Typography>
        </div>

        <div className="flex gap-4 items-center ">
          <img
            src={profile}
            alt="img"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <Typography className="!text-sm !font-bold">{name}</Typography>
            <Typography className="!text-sm text-darkGray">
              {designation}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsCard;
