import { Components } from '@mui/material/styles';

import { ColourPalette } from '../Colour';

const { gray } = ColourPalette;

export const MuiAppBar: Components['MuiAppBar'] = {
	variants: [
		{
			props: {},
			style: {
				backgroundColor: gray.light,
				maxHeight: '80px',
				minHeight: '80px',
				color: gray.dark,
				justifyContent: 'center'
			},
		},
	],
};