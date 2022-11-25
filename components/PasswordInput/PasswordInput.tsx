import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import * as React from 'react';

type Props = Omit<TextFieldProps, 'type' | 'InputProps'>;
export const PasswordInput: React.FC<Props> = (props): JSX.Element => {
	const [ showPassword, setShowPassword ] = React.useState<boolean>(false);

	return (
		<TextField
			{...props}
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: <InputAdornment position="end">
					<IconButton
						aria-label="Toggle password visibility"
						onClick={() => setShowPassword((prevState) => !prevState)}
						onMouseDown={(e) => {
							e.preventDefault();
						}}
						edge="end"
					>
						{showPassword ? <VisibilityOff /> : <Visibility />}
					</IconButton>
				</InputAdornment>,
			}}
		/>
	);
};