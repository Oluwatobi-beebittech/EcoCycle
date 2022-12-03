import { nanoid } from '@reduxjs/toolkit';

import { WebRoute } from '@Utilities';

type TabContentDetails = {
	id: string;
	link: string;
	description: string;
}

type AllTabContent = Array<TabContentDetails>;

export const EcoTokenUtilityTabContent: AllTabContent = [
	{
		id: nanoid(),
		link: WebRoute.LEARN_ECO_DISCOUNT,
		description: 'Trade your EcoTokens for discounts at accredited EcoChampion stores',
	},
	{
		id: nanoid(),
		link: WebRoute.LEARN_ECO_TAX_CREDIT,
		description: 'Businesses who are EcoChampions can trade their earned EcoTokens for tax credit. ',
	},
	{
		id: nanoid(),
		link: WebRoute.LEARN_ECO_REDEEM,
		description: 'Redeem goodies using your EcoTokens at accredited EcoChampion stores.',
	}
];