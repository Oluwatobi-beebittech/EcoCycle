import { createTheme, Theme as MuiTheme } from '@mui/material/styles';

import { ColourPalette,components, Typography } from './Overrides';

export type { MuiTheme };

export const Theme: MuiTheme = createTheme({
	components,
	palette: ColourPalette,
	typography: Typography,
});