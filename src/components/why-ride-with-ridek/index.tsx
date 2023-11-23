import { Typography } from "@mui/material";
import { whyRideWithUs } from "../testimonials/meta";

const WhyRideWithRidek = () => {
  return (
    <div className="flex flex-col flex-1 h-full px-6 py-[5rem] gap-4 bg-fulvous !text-white">
      <Typography fontSize={13}>{`/// WHY CHOOSE US!`}</Typography>
      <Typography fontSize={24} className="!font-semibold">
        Why Ride with Govahan?
      </Typography>

      <Typography fontSize={12}>
        We successfully cope with tasks of varying complexity, provide long-term
        guarantees and regularly master technologies
      </Typography>
      {whyRideWithUs.map((data, index) => (
        <div className="flex gap-3 items-center" key={index}>
          {data.icon}
          <div className="flex flex-col gap-1 ">
            <Typography className="!font-medium" fontSize={16}>
              {data.name}
            </Typography>
            <Typography fontSize={12} className="w-[70%]">
              {data.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WhyRideWithRidek;
