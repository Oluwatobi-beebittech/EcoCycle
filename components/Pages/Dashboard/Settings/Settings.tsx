import { Box,  Tab, Tabs, Typography , } from '@mui/material';
import * as React from 'react';

import { useGetConnectedWalletStatus } from 'hooks';

import { ApiKeysTabPanel } from './ApiKeysTabPanel';
import { ExternalWalletTabPanel } from './ExternalWalletTabPanel';
import { ProfileTabPanel } from './ProfileTabPanel';
import { SecurityTabPanel } from './SecurityTabPanel';
import { useSetTabIndex } from './useSetTabIndex';

export const Settings: React.FC = (): JSX.Element => {
	const [ currentTabIndex, setCurrentTabIndex ] = React.useState<number>(0);
	const maximumTabIndex = 3;
	const minimumTabIndex = 0;
	useSetTabIndex(currentTabIndex, setCurrentTabIndex, minimumTabIndex, maximumTabIndex);
	const { isExternalWalletConnected, addresses } = useGetConnectedWalletStatus();

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Typography variant='h3'>Settings</Typography>
			<Tabs value={currentTabIndex} onChange={(e, tabIndex) => setCurrentTabIndex(tabIndex)}>
				<Tab label="Profile" />
				<Tab label="API keys" />
				<Tab label="External wallet" />
				<Tab label="Security" />
			</Tabs>
			<ProfileTabPanel currentTabPanelIndex={currentTabIndex} index={0} />
			<ApiKeysTabPanel currentTabPanelIndex={currentTabIndex} index={1} />
			<ExternalWalletTabPanel
				currentTabPanelIndex={currentTabIndex}
				index={2}
				isExternalWalletConnected={isExternalWalletConnected}
				walletAddress={addresses[0]}
			/>
			<SecurityTabPanel currentTabPanelIndex={currentTabIndex} index={3} />
		</Box>
	);
};