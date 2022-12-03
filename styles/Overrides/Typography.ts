import type { Typography as MuiTypography } from '@mui/material/styles/createTypography';

import { ColourPalette } from './Colour';

export const Merriweather: string = 'Merriweather, serif';
export const Raleway: string = 'Raleway, sans-serif';

const { gray } = ColourPalette;
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
	h3: {
		fontFamily: Raleway,
		fontSize: '1.618125rem',
		fontWeight: 700,
	},
	body1: {
		fontFamily: Raleway,
		fontSize: '1rem',
		fontWeight: 400,
	},
	body2: {
		fontFamily: Raleway,
		fontSize: '1.25rem',
		fontWeight: 500
	},
	subtitle1: {
		fontFamily: Raleway,
		fontSize: '1.25rem',
		fontWeight: 'bold',
	},
	caption: {
		fontFamily: Raleway,
		fontSize: '0.75rem',
		fontWeight: 600,
		color: gray.text
	},
	button: {
		fontFamily: Raleway,
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