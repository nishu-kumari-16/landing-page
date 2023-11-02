import { Rating, Typography } from "@mui/material";

const TestimonialsCard = ({ profile, name, rating, review }: any) => {
  return (
    <div className=" gap-4 rounded-lg shadow-lg keen-slider__slide max-w-[500px] flex h-auto flex-col  bg-duskPurple p-6 sm:p-8 lg:p-12">
      <div className="flex gap-4 items-center">
        <img
          src={profile}
          alt="img"
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <Rating value={rating} size="small" />
          <Typography className="!text-sm !font-bold">{name}</Typography>
        </div>
      </div>
      <Typography className="!text-xs">{review}</Typography>
    </div>
  );
};
export default TestimonialsCard;
