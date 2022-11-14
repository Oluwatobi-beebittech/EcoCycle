import { Button as MuiButton, ButtonProps } from '@mui/material';
import * as React from 'react';

type Props = ButtonProps;

export const Button: React.FC<Props>  = ({ children, ...rest }): JSX.Element =>
	<MuiButton {...rest}>
		{children}
	</MuiButton>
;