import { styled } from "@mui/material/styles";
import MUIInput from "@mui/material/Input";
import colorPalette from "../../helpers/color-palette";

export const StyledInput = styled(MUIInput)(({ theme }) => ({
  color: colorPalette.gray,
  backgroundColor: colorPalette.offWhite,
  border: "none",
}));
