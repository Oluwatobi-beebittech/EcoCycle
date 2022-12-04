import { AddLink } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';

import { FormStatusAlert, LoadingPopup, OrganisedList, OrganisedListItems } from '@Components';
import { useGetConnectedWalletStatus, useFormSubmit } from '@Hooks';
import { RootState, UserState } from '@Store';
import { registerEcoCycleToken, ecoCycleTokenDetails } from '@Utilities';
import BUSDIcon from 'public/busd_logo.png';
import DAIIcon from 'public/dai_logo.png';
import ECOIcon from 'public/ecotoken_logo.png';
import USDTIcon from 'public/tether-usdt-logo.png';
import USDCIcon from 'public/usdc_logo.png';


export const CoinsOrganisedList = () => {
	const { isExternalWalletConnected } = useGetConnectedWalletStatus();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();
	const { data }: UserState = useSelector<RootState, UserState>(rootState => rootState.UserSlice);
	const isLazerPayKeysPresent = Boolean(data?.lazerPayKey?.publicKey) && Boolean(data?.lazerPayKey?.secretKey);

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
			description: isExternalWalletConnected ? '0.00' : '__.__',
			name: 'ECO',
			itemEndComponent: LinkWalletWithEcoTokenButton
		},
		{
			image: USDTIcon,
			description: isLazerPayKeysPresent ? '30.00' : '__.__',
			name: 'USDT'
		},
		{
			image: USDCIcon,
			description: isLazerPayKeysPresent ? '30.00' : '__.__',
			name: 'USDC'
		},
		{
			image: BUSDIcon,
			description: isLazerPayKeysPresent ? '30.00' : '__.__',
			name: 'BUSD'
		},
		{
			image: DAIIcon,
			description: isLazerPayKeysPresent ? '30.00' : '__.__',
			name: 'DAI'
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