import { Components } from '@mui/material/styles';

import { ColourPalette } from '../Colour';
import { Raleway } from '../Typography';
const { gray } = ColourPalette;

export const MuiLink: Components['MuiLink'] = {
	variants: [
		{
			props: {},
			style: {
				fontFamily: Raleway,
				fontSize: '1rem',
				fontWeight: 700,
				color: gray.dark,
				textDecoration: 'none',
			},
		},
	],
};