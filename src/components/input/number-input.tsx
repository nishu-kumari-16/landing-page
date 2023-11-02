import { ChangeEvent, FC, forwardRef } from "react";
import Input from ".";
import { InputProps } from "@mui/material/Input";

const NumberInput: FC<InputProps> = forwardRef((props, forwardedRef) => {
  const handleNumberInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const regex = /[^0-9]/g;
    event.target.value = event.target.value.replace(regex, "");
    props.onChange?.(event);
  };

  return (
    <Input
      {...props}
      type="text"
      onChange={handleNumberInputChange}
      ref={forwardedRef}
      className={` ${props.className}`}
      autoComplete="off"
    />
  );
});

NumberInput.displayName = "NumberInput";
export default NumberInput;
