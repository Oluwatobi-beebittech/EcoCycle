import { Components } from '@mui/material/styles';

import { MuiTheme } from '@Styles';

import { MuiButton } from './Button';

export const components: Components<Omit<MuiTheme, 'components'>> | undefined = {
	MuiButton
};