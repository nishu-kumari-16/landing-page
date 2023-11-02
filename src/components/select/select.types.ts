import { ButtonTypeMap } from "@mui/material";
import { SelectProps as MUISelectProps } from "@mui/material/Select";
import { ReactElement, ReactNode } from "react";

export type TColor = ButtonTypeMap["props"]["color"];

export type TVariant = ButtonTypeMap["props"]["variant"];

export interface IButtonOptionObj {
  value?: any;
  label?: ReactNode | undefined;
  disabled?: boolean;
  onClick?: () => void;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  variant?: TVariant | undefined;
  color?: TColor;
  className?: string;
}

export type ListOptions = Array<Omit<IButtonOptionObj, "onClick">>;

//restricted the select component from taking label as a prop

export type SelectProps = Omit<MUISelectProps, "label"> & {
  options: ListOptions;
};
