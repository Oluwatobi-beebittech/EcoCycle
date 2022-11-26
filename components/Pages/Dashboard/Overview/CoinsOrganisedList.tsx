import { AddLink } from '@mui/icons-material';
import { Button, Tooltip } from '@mui/material';
import * as React from 'react';

import { OrganisedList, OrganisedListItems } from '@Components';
import { useGetConnectedWalletStatus } from '@Hooks';
import MetamaskIcon from 'public/metamask.png';

const LinkWalletWithEcoTokenButton: React.ReactElement =  <Tooltip
	title='Link EcoToken to External Wallet'>
	<Button
		variant="text"
		size='small'
		startIcon={<AddLink />}
		sx={{ textTransform: 'none' }}
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
export const CoinsOrganisedList = () => {
	const { isExternalWalletConnected } = useGetConnectedWalletStatus();
	const listItemsWithoutComponents: Array<OrganisedListItems> = listItems.map(
		({ name, description, image }) => ({ name, description, image })
	);

	return <OrganisedList listTitle='Coins' listItems={isExternalWalletConnected ? listItems : listItemsWithoutComponents} />;

};