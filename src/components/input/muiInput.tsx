import { FC, forwardRef } from "react";
import { InputProps } from "@mui/material/Input";
import { StyledInput } from "./input.styles";
import { Grid } from "@mui/material";

export interface IInputPropObj extends InputProps {
  errors?: string;
}

const MuiInput: FC<IInputPropObj> = forwardRef((props, forwardedRef) => {
  const { errors, ...otherProps } = props;
  return (
    <Grid
      item
      className="flex-[2] flex !flex-col gap-4 !text-left justify-end"
      xs={3}
      sm={3}
      md={4}
    >
      <div className={`flex flex-col gap-2 justify-end rounded-md`}>
        {errors && <div className="text-red text-xs">{errors}</div>}

        <StyledInput
          {...otherProps}
          ref={forwardedRef}
          inputProps={{ className: "text-white" }}
          className={`${props.className} py-1 rounded-md flex-1 !min-w-[7.5rem] !bg-[#575859] after:border-t after:border-white after:!border-b-0 px-4 placeholder-warningPrimary max-h-[2.5rem]`}
        />
      </div>
    </Grid>
  );
});

MuiInput.displayName = "Input";
export default MuiInput;
