type Colours = {
        [key: string]: {
            [key: number]: string;
        };
};

export const ColourScheme: Colours = {
	green: {
		500: '#048104',
	},
	gray: {
		100: '#ffffff',
		200: '#F5F5F5',
		800: '#303030',
		900: '#02293E',
	}
};