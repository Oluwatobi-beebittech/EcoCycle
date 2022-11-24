import * as React from 'react';

import { OrganisedList, OrganisedListItems } from '@Components';
import MetamaskIcon from 'public/metamask.png';

const listItems: Array<OrganisedListItems> = [
	{
		image: MetamaskIcon,
		description: '30.00',
		name: 'ECO'
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

	return <OrganisedList listTitle='Coins' listItems={listItems}/>;

};