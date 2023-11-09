import { FC, forwardRef } from "react";
import { InputProps } from "@mui/material/Input";
import { StyledInput } from "./input.styles";

export interface IInputPropObj extends InputProps {}

const MuiInput: FC<IInputPropObj> = forwardRef((props, forwardedRef) => (
  <StyledInput
    {...props}
    ref={forwardedRef}
    inputProps={{ class: "text-white" }}
    className={`${props.className} py-1 rounded-md flex-1 !min-w-[7.5rem] !bg-[#575859] after:border-t after:border-white after:!border-b-0 px-4 placeholder-warningPrimary`}
  />
));

MuiInput.displayName = "Input";
export default MuiInput;
