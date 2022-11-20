import { ColourScheme } from './ColourScheme';

const { green, gray } = ColourScheme;

export const ColourPalette = {
	primary: {
		main: green[500],
		light: green[500],
		dark: green[500],
	},
	gray: {
		light: gray[100],
		dark: gray[900],
		in_between: gray[200]
	}
};