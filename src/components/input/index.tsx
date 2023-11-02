import { FC, forwardRef } from "react";
import { InputProps } from "@mui/material/Input";
import { StyledInput } from "./input.styles";

export interface IInputPropObj extends InputProps {}

const Input: FC<IInputPropObj> = forwardRef((props, forwardedRef) => (
  <StyledInput {...props} ref={forwardedRef} className={props.className} />
));

Input.displayName = "Input";
export default Input;
