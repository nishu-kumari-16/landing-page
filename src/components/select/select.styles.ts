import { styled } from "@mui/material/styles";
import MuiSelect from "@mui/material/Select";
import colorPalette from "../../helpers/color-palette";

export const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  border: `0.0625rem solid ${colorPalette.lightGray}`,
  background: colorPalette.white,
  borderRadius: "0.5rem",
  padding: "0.5rem 0.75rem",
  maxHeight: "2.5rem",
  minWidth: "4.75rem",
  "&.Mui-focused": {
    border: `0.0625rem solid ${colorPalette.lightGray}`,
  },
  ".MuiPaper-root": {
    marginTop: "0.5rem",
    border: `0.0625rem solid ${colorPalette.white}`,
    paddingBlock: "0.5rem",
    boxShadow:
      " 0 0.75rem 1rem -0.25rem rgba(16, 24, 40, 0.08), 0 0.25rem 0.375rem -0.125rem rgba(16, 24, 40, 0.03)",
  },

  ".MuiList-root": {
    padding: "0",
    boxShadow: "none",
    borderRadius: "0.5rem",

    ".MuiMenuItem-root": {
      padding: "0.625rem 1rem",

      ":hover": {
        background: colorPalette.white,
      },
    },
    ".Mui-selected": {
      background: colorPalette.white,

      ":hover": {
        background: colorPalette.white,
      },
    },
  },
  ".MuiInputBase-root": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  ".MuiInputBase-input": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: 0,
  },
  ".MuiSelect-icon ": {
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  ".MuiSelect-iconOpen": {
    transform: "translate(-50%, -50%) rotate(180deg)",
  },
}));
