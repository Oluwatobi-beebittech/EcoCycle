import { createTheme, Theme as MuiTheme } from '@mui/material/styles';

import { ColourPalette,components, Typography } from './Overrides';

export const Theme: MuiTheme = createTheme({
	components,
	palette: ColourPalette,
	typography: Typography,
});

export type { MuiTheme };