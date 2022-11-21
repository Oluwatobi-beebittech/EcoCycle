import { nanoid } from '@reduxjs/toolkit';

type TabContentDetails = {
	id: string;
	link: string;
	description: string;
}

type AllTabContent = Array<TabContentDetails>;

export const EcoTokenUtilityTabContent: AllTabContent = [
	{
		id: nanoid(),
		link: '/',
		description: 'Trade your EcoTokens for discounts at accredited EcoChampion stores',
	},
	{
		id: nanoid(),
		link: '/',
		description: 'Businesses who are EcoChampions can trade their earned EcoTokens for tax credit. ',
	},
	{
		id: nanoid(),
		link: '/',
		description: 'Redeem goodies using your EcoTokens at accredited EcoChampion stores.',
	}
];