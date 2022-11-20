import { Components } from '@mui/material/styles';

export const MuiIcon: Components['MuiIcon'] = {
	variants: [
		{
			props: { fontSize: 'large' },
			style: {
				fontSize: '2.5rem'
			},
		},
		{
			props: { fontSize: 'small' },
			style: {
				fontSize: '1.25rem'
			},
		},
	],
};