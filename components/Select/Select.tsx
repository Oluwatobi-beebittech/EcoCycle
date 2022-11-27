/* eslint-disable react/display-name */
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
export const Select = React.forwardRef< HTMLSelectElement, Props>((
	props, ref
): JSX.Element => {
	const { errorMessage, menuItems, labelId, label, ...rest } = props;
	console.log({ othr: rest, ref });
	return (
		<>
			<InputLabel id={labelId}>{label}</InputLabel>
			<MuiSelect labelId={labelId} label={label} ref={ref} {...rest}>
				{menuItems.map(
					({ name, value }
					) => <MenuItem value={value} key={value}>{name}</MenuItem>
				)
				}
			</MuiSelect>
			<FormHelperText>{errorMessage ?? ''}</FormHelperText>
		</>
	);
});