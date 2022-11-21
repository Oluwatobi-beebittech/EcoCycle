import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

import { ColourPalette } from '@Styles';

import { HowitWorksTabContent , HowitWorksTabPanel } from './HowitWorksTabPanel';


const { gray } = ColourPalette;

export const HowItWorks: React.FC = (): JSX.Element => {
	const [ currentTabIndex, setCurrentTabIndex ] = React.useState<number>(0);

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
		<Tabs value={currentTabIndex} onChange={(e, tabIndex) => setCurrentTabIndex(tabIndex)} centered>
			<Tab label="For Collectors" />
			<Tab label="For Processors" />
		</Tabs>
		<HowitWorksTabPanel currentTabPanelIndex={currentTabIndex} index={0} tabContent={HowitWorksTabContent[0]}/>
		<HowitWorksTabPanel currentTabPanelIndex={currentTabIndex} index={1} tabContent={HowitWorksTabContent[1]}/>

	</Box>;
};