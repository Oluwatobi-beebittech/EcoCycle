import { FormHelperText, MenuItem, Select as MuiSelect, SelectProps, InputLabel } from '@mui/material';
import * as React from 'react';

export type MenuItems = Array<{
    name: string;
    value: string;
}>;

type Props = SelectProps & {
    errorMessage?: string | undefined;
    menuItems: MenuItems
};
export const Select: React.FC<Props> = (
	{ errorMessage, menuItems, labelId, label, ...rest }
): JSX.Element => {
	return (
		<>
			<InputLabel id={labelId}>{label}</InputLabel>
			<MuiSelect labelId={labelId} label={label} {...rest}>
				{menuItems.map(
					({ name, value }
					) => <MenuItem value={value} key={value}>{name}</MenuItem>
				)
				}

			</MuiSelect>
			<FormHelperText>{errorMessage ?? ''}</FormHelperText>
		</>
	);
};