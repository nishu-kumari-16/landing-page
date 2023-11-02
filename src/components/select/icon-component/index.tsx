import { SelectIconComponentProps } from "./iconComponent.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SelectIconComponent = ({ className }: SelectIconComponentProps) => {
  return (
    <div className="w-[0.75rem]">
      <ExpandMoreIcon className={className} />
    </div>
  );
};

export default SelectIconComponent;
