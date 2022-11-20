import { Components, Interpolation } from '@mui/material/styles';

import { MuiTheme } from '@Styles';

import { ColourPalette } from '../Colour';

const { primary } = ColourPalette;

const btnLgSharedStyles:Interpolation<{theme: MuiTheme}> = {
	textTransform: 'none',
	fontSize: 'var(--btn-lg-font-size)',
	padding: 'var(--button-padding)',
	borderRadius: 'var(--border-radius)',
	gap: 'var(--gap)',
	lineHeight: 'var(--btn-lg-line-height)',
};
const btnSmSharedStyles:Interpolation<{theme: MuiTheme}> = {
	textTransform: 'none',
	fontSize: 'var(--btn-sm-font-size)',
	lineHeight: 'var(--btn-sm-line-height)',
	padding: 'var(--button-padding)',
	gap: 'var(--gap)',
	borderRadius: 'var(--border-radius)',
};

export const MuiButton: Components['MuiButton'] = {
	variants: [
		{
			props: { variant: 'contained', size: 'large' },
			style: {
				...btnLgSharedStyles,
			},
		},
		{
			props: { variant: 'outlined', size: 'large' },
			style: {
				...btnLgSharedStyles,
				border: `1px solid ${primary.main[500]}`
			},
		},
		{
			props: { variant: 'contained', size: 'small' },
			style: {
				...btnSmSharedStyles
			},
		},
		{
			props: { variant: 'outlined', size: 'small' },
			style: {
				...btnSmSharedStyles,
				border: `1px solid ${primary.main[500]}`
			},
		},
	],
};