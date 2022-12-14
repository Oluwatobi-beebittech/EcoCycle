import { AddLink } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';

import { FormStatusAlert, LoadingPopup, OrganisedList, OrganisedListItems } from '@Components';
import { useGetConnectedWalletStatus, useFormSubmit } from '@Hooks';
import { RootState, UserState, TokensState } from '@Store';
import { registerEcoCycleToken, ecoCycleTokenDetails, Coins } from '@Utilities';
import BUSDIcon from 'public/busd_logo.png';
import DAIIcon from 'public/dai_logo.png';
import ECOIcon from 'public/ecotoken_logo.png';
import USDTIcon from 'public/tether-usdt-logo.png';
import USDCIcon from 'public/usdc_logo.png';


export const CoinsOrganisedList = () => {
	const { isExternalWalletConnected } = useGetConnectedWalletStatus();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();
	const { data }: UserState = useSelector<RootState, UserState>(rootState => rootState.UserSlice);
	const { data: tokensData }: TokensState = useSelector<RootState, TokensState>(rootState => rootState.TokensSlice);
	const isLazerPayKeysPresent = Boolean(data?.lazerPayKey?.publicKey) && Boolean(data?.lazerPayKey?.secretKey);

	const ecoTokenBalance = tokensData?.ECO?.tokenBalance as string ?? '__.__';
	const usdtTokenBalance = tokensData?.USDT?.tokenBalance as string ?? '__.__';
	const usdcTokenBalance = tokensData?.USDC?.tokenBalance as string ?? '__.__';
	const busdTokenBalance = tokensData?.BUSD?.tokenBalance as string ?? '__.__';
	const daiTokenBalance = tokensData?.DAI?.tokenBalance as string ?? '__.__';


	const LinkWalletWithEcoTokenButton: React.ReactElement =  <Tooltip
		title='Link EcoToken to External Wallet'>
		<Button
			variant="text"
			size='small'
			startIcon={<AddLink />}
			sx={{ textTransform: 'none' }}
			onClick={async () => {
				update({ isLoading: true });
				const {
					isSuccess,
					hasError: registerError,
					statusMessage
				} = await registerEcoCycleToken(ecoCycleTokenDetails);
				update({
					isLoading: false,
					hasError: registerError,
					hasSuccess: isSuccess,
					errorMessage: statusMessage,
					successMessage: statusMessage
				});
			}
			}
		>
		Link
		</Button>
	</Tooltip>;
	const listItems: Array<OrganisedListItems> = [
		{
			image: ECOIcon,
			description: isExternalWalletConnected ? ecoTokenBalance : '__.__',
			name: Coins.ECO,
			itemEndComponent: LinkWalletWithEcoTokenButton
		},
		{
			image: USDTIcon,
			description: isLazerPayKeysPresent ? usdtTokenBalance : '__.__',
			name: Coins.USDT
		},
		{
			image: USDCIcon,
			description: isLazerPayKeysPresent ? usdcTokenBalance : '__.__',
			name: Coins.USDC
		},
		{
			image: BUSDIcon,
			description: isLazerPayKeysPresent ? busdTokenBalance : '__.__',
			name: Coins.BUSD
		},
		{
			image: DAIIcon,
			description: isLazerPayKeysPresent ? daiTokenBalance : '__.__',
			name: Coins.DAI
		},
	];

	const listItemsWithoutComponents: Array<OrganisedListItems> = listItems.map(
		({ name, description, image }) => ({ name, description, image })
	);

	return (
		<>
			<OrganisedList listTitle='Coins' listItems={isExternalWalletConnected ? listItems : listItemsWithoutComponents} />
			<FormStatusAlert
				hasError={hasError}
				hasSuccess={hasSuccess}
				successMessage={successMessage}
				errorMessage={errorMessage}
				update={update}
			/>
			<LoadingPopup isOpen={isLoading}/>
		</>
	);
};