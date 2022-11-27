import { AddLink } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import * as React from 'react';

import { FormStatusAlert, LoadingPopup, OrganisedList, OrganisedListItems } from '@Components';
import { useGetConnectedWalletStatus, useFormSubmit } from '@Hooks';
import { registerEcoCycleToken, ecoCycleTokenDetails } from '@Utilities';
import MetamaskIcon from 'public/metamask.png';

export const CoinsOrganisedList = () => {
	const { isExternalWalletConnected } = useGetConnectedWalletStatus();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();
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
			image: MetamaskIcon,
			description: '0.00',
			name: 'ECO',
			itemEndComponent: LinkWalletWithEcoTokenButton
		},
		{
			image: MetamaskIcon,
			description: '30.00',
			name: 'ECO'
		},
		{
			image: MetamaskIcon,
			description: '30.00',
			name: 'ECO'
		}
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