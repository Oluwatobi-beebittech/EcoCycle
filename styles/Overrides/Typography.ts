import type { Typography as MuiTypography } from '@mui/material/styles/createTypography';

export const Merriweather: string = 'Merriweather, serif';
export const Raleway: string = 'Raleway, sans-serif';

export const Typography: Partial<MuiTypography> =  {
	h1: {
		fontFamily: Merriweather,
		fontSize: '2.618125rem',
		fontWeight: 700,
	},
	h2: {
		fontFamily: Merriweather,
		fontSize: '1.618125rem',
		fontWeight: 400,
	},
	body1: {
		fontFamily: Raleway,
		fontWeight: 400,
	},
	button: {
		fontFamily: Raleway,
	},
	h3: {
		fontFamily: Raleway,
		fontSize: '1.618125rem',
		fontWeight: 700,
	},
	// h4: undefined,
	// h5: undefined,
	// h6: undefined,
	// subtitle1: undefined,
	// subtitle2: undefined,
	// body2: undefined,
	// caption: undefined,
	// overline: undefined,
	// fontFamily: undefined,
	fontSize: 16,
	// fontWeightLight: undefined,
	// fontWeightRegular: undefined,
	// fontWeightMedium: undefined,
	// fontWeightBold: undefined,
	htmlFontSize: 16,
};