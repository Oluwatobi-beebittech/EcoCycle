import { Box, Skeleton, Toolbar } from '@mui/material';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { InternalTopNavigationBar, InternalSideBarNavigation, WalletConnectBanner } from '@Components';
import { useGetConnectedWalletStatus } from '@Hooks';
import { AppDispatch, RootState, UserState, getUserDetails, getEcoTokenBalance, getStableCoinsBalance } from '@Store';
import { Coins } from '@Utilities';

type Props = {
    children: React.ReactElement;
}
export const InternalLayout: React.FC<Props> = ({ children }): JSX.Element => {
	const { isExternalWalletConnected, addresses } = useGetConnectedWalletStatus();
	const { isLoading, data }: UserState = useSelector<RootState, UserState>(rootState => rootState.UserSlice);
	const dispatch = useDispatch<AppDispatch>();
	const isLazerPayKeysPresent = Boolean(data?.lazerPayKey?.publicKey) && Boolean(data?.lazerPayKey?.secretKey);

	React.useEffect(() => {
		dispatch(getUserDetails());
	}, []);

	React.useEffect(() => {
		if(isExternalWalletConnected) dispatch(getEcoTokenBalance(addresses[0]));
	}, [ isExternalWalletConnected, addresses[0] ]);

	React.useEffect(() => {
		if(isLazerPayKeysPresent) {
			Object.values(Coins)
				.filter(
					(coin: Coins) => coin !== Coins.ECO
				)
				.forEach(
					(coin: Coins) => dispatch(getStableCoinsBalance(coin))
				);
		}
	}, [ isLazerPayKeysPresent ]);

	return (
		<>
			<InternalTopNavigationBar firstNameInitial={data?.firstName?.charAt(0) ?? ''}/>
			<Box sx={{ width: '100vw' }}>
				<InternalSideBarNavigation/>
				<Box component="main" sx={{ flexGrow: 1, p: 3, width: '70%', marginLeft: '20%' }}>
					<Toolbar />
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', height: '100%' }}>
						{
							isLoading
								? <Skeleton/>
								:<WalletConnectBanner
									isExternalWalletConnected={isExternalWalletConnected}
									fullName={`${data.firstName} ${data.lastName}`}
									walletAddress={addresses[0]}
									isLazerPayKeysPresent={isLazerPayKeysPresent}
								/>
						}
						{children}
					</Box>
				</Box>
			</Box>
		</>
	);
};