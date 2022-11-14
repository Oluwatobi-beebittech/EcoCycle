import { Components } from '@mui/material/styles';

import { ColourPalette } from '../Colour';

const { primary } = ColourPalette;

export const MuiButton: Components['MuiButton'] = {
	variants: [
		{
			props: { variant: 'contained', size: 'large' },
			style: {
				textTransform: 'none',
				fontSize: '28px',
				lineHeight: '32.8px',
				padding: '15px 36px 15px 36px',
				borderRadius: '5px',
				gap: '10px'
			},
		},
		{
			props: { variant: 'outlined', size: 'large' },
			style: {
				textTransform: 'none',
				fontSize: '28px',
				lineHeight: '32.8px',
				padding: '15px 36px 15px 36px',
				borderRadius: '5px',
				gap: '10px',
				border: `1px solid ${primary.main[500]}`
			},
		},
	],
};