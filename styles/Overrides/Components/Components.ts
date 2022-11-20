import { Components } from '@mui/material/styles';

import { MuiTheme } from '@Styles';

import { MuiAppBar } from './AppBar';
import { MuiButton } from './Button';
import { MuiIcon } from './Icon';
import { MuiLink } from './Link';
import { MuiToolbar } from './Toolbar';

export const components: Components<Omit<MuiTheme, 'components'>> | undefined = {
	MuiAppBar,
	MuiButton,
	MuiIcon,
	MuiLink,
	MuiToolbar
};