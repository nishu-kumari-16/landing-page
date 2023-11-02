import { FC } from "react";
import { StyledSelect } from "./select.styles";
import MenuItem from "@mui/material/MenuItem";
import { SelectProps } from "./select.types";
import SelectIconComponent from "./icon-component";

const Select: FC<SelectProps> = ({ options, ...rest }) => {
	if (!options.length) return null;
	return (
		<StyledSelect
			IconComponent={SelectIconComponent}
			{...rest}
			MenuProps={{
				disablePortal: true,
			}}
		>
			{options.map(({ value, label }) => (
				<MenuItem value={value} key={value}>
					{label}
				</MenuItem>
			))}
		</StyledSelect>
	);
};

export default Select;
