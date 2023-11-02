import { Typography } from "@mui/material";

const GetInTouchCard = ({ icon, title, description }: any) => {
  return (
    <div className="flex flex-col gap-2 justify-center bg-white shadow-lg p-4 rounded-lg min-w-[200px] flex-1">
      <div className="flex gap-3 items-center">
        {icon}
        <Typography variant="h6">{title}</Typography>
      </div>

      <Typography variant="caption">{description}</Typography>
    </div>
  );
};
export default GetInTouchCard;
