import { ShoppingCartCheckout, Redeem, ConfirmationNumber } from '@mui/icons-material';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import * as React from 'react';

import { ColourPalette } from '@Styles';

import { EcoTokenUtilityTabContent , EcoTokenUtilityTabPanel } from './EcoTokenUtilityTabPanel';


const { gray } = ColourPalette;

export const EcoTokenUtility: React.FC = (): JSX.Element => {
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
				EcoToken Utility
		</Typography>
		<Box sx={{ display: 'flex', height: 224 }} >
			<Tabs
				orientation='vertical'
				value={currentTabIndex} onChange={(e, tabIndex) => setCurrentTabIndex(tabIndex)} centered>
				<Tab icon={<ShoppingCartCheckout />} iconPosition="start" label="EcoDiscount" />
				<Tab icon={<ConfirmationNumber />} iconPosition="start" label="EcoTaxCredit" />
				<Tab icon={<Redeem />} iconPosition="start" label="EcoRedeem" />
			</Tabs>
			{EcoTokenUtilityTabContent.map((content, index) => {
				const { link, description, id } = content;

				return <EcoTokenUtilityTabPanel
					currentTabPanelIndex={currentTabIndex}
					link={link}
					description={description}
					key={id}
					index={index}
				/>;
			})}
		</Box>
	</Box>;
};