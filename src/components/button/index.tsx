/* eslint-disable react/display-name */
import React, { FC, forwardRef } from "react";
import MUIButton, { ButtonProps } from "@mui/material/Button";

const Button: FC<ButtonProps> = forwardRef(
  ({ children, ...rest }, forwardedRef) => {
    return (
      <MUIButton {...rest} ref={forwardedRef}>
        {children}
      </MUIButton>
    );
  }
);

export default Button;
