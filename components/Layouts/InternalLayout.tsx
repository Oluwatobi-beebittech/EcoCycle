import { Box, Toolbar } from '@mui/material';
import * as React from 'react';

import { InternalTopNavigationBar, InternalSideBarNavigation, WalletConnectBanner } from '@Components';
import { useGetConnectedWalletStatus } from '@Hooks';

type Props = {
    children: React.ReactElement;
}
export const InternalLayout: React.FC<Props> = ({ children }): JSX.Element => {
	const { isExternalWalletConnected, addresses } = useGetConnectedWalletStatus();

	return <>
		<InternalTopNavigationBar/>
		<Box sx={{ width: '100vw' }}>
			<InternalSideBarNavigation/>
			<Box component="main" sx={{ flexGrow: 1, p: 3, width: '70%', marginLeft: '20%' }}>
				<Toolbar />
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', height: '100%' }}>
					<WalletConnectBanner
						isExternalWalletConnected={isExternalWalletConnected}
						fullName='Ayo Ayoade'
						walletAddress={addresses[0]}/>
					{children}
				</Box>
			</Box>
		</Box>
	</>;
};