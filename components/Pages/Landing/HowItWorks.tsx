import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import { ColourPalette } from '@Styles';

import { TabPanel } from './TabPanel';

const { gray } = ColourPalette;

export const HowItWorks: React.FC = (): JSX.Element => {
	return <Box
		id="how-it-works"
		sx={
			{
				borderRadius: 'var(--border-radius)',
				backgroundColor: gray.in_between,
				padding: '4.1875rem 3.1875rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
			}
		}>

		<Typography
			variant='h1'
			sx={{ lineHeight: '4rem' }}
			align='center'
		>
				How it Works
		</Typography>
		<Tabs value="Item One" onChange={(e, newj) => console.log(e, newj)} centered>
			<Tab label="For Collectors" />
			<Tab label="For Processors" />
		</Tabs>
		<TabPanel />

	</Box>;
};