import Typography from "@mui/material/Typography";
import colorPalette from "../../helpers/color-palette";
import { LocationCityOutlined, Work } from "@mui/icons-material";
import Menu from "@mui/icons-material/Menu";
import Button from "../../components/button";

const CareersCard = ({ name, location, type, role, onApply }: any) => {
  const handleButtonClick = () => {
    onApply && onApply({ name, location, type, role });
  };
  return (
    <div className="flex flex-col white shadow-lg rounded-md h-full justify-between pb-4">
      <Typography
        fontSize={16}
        color={colorPalette.white}
        fontWeight={600}
        className="bg-yellow w-full text-center py-6"
      >
        {name}
      </Typography>
      <div className="flex flex-col gap-4 p-4">
        <div className=" flex items-center gap-6">
          <LocationCityOutlined className="text-fulvous" />
          <Typography fontSize={14} color={colorPalette.codGray}>
            {location}
          </Typography>
        </div>
        <div className=" flex items-center gap-6">
          <Work className="text-fulvous" />
          <Typography fontSize={14} color={colorPalette.codGray}>
            {type}
          </Typography>
        </div>
        <div className=" flex items-center gap-6">
          <Menu className="text-fulvous" />
          <Typography fontSize={14} color={colorPalette.codGray}>
            {role}
          </Typography>
        </div>
      </div>
      <Button
        variant="outlined"
        className="border w-[calc(100%-2rem)] py-4 !box-border !mx-4 !text-md !border-fulvous !text-fulvous hover:!bg-fulvous hover:!text-white"
        onClick={handleButtonClick}
      >
        APPLY
      </Button>
    </div>
  );
};
export default CareersCard;
