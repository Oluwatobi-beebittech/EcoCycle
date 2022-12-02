import { Autorenew, HorizontalSplit, CallReceived, Category, LocalShipping, Wallet } from '@mui/icons-material';
import { nanoid } from '@reduxjs/toolkit';
import * as React from 'react';

import { ColourPalette } from '@Styles';

const { gray } = ColourPalette;

type TabContentDetails = {
	id: string;
	icon: React.ReactElement;
	title: string;
	description: string;
}

export type TabContentArray = Array<TabContentDetails>;

type AllTabContent = Array<TabContentArray>;

export const HowitWorksTabContent: AllTabContent = [
	[
		{
			id: nanoid(),
			icon: <HorizontalSplit sx={{ width: '6.25rem', height: '6.25rem', color: gray.in_between }}/>,
			title: 'Gather',
			description: 'Pick wastes lying within the home, office, or community',
		},
		{
			id: nanoid(),
			icon: <Category sx={{ width: '6.25rem', height: '6.25rem', color: gray.in_between }}/>,
			title: 'Sort',
			description: 'Group wastes according to types.',
		},
		{
			id: nanoid(),
			icon: <LocalShipping sx={{ width: '6.25rem', height: '6.25rem', color: gray.in_between }}/>,
			title: 'Deliver',
			description: 'Hand over sorted waste to processor.',
		}
	],
	[
		{
			id: nanoid(),
			icon: <CallReceived sx={{ width: '6.25rem', height: '6.25rem', color: gray.in_between }}/>,
			title: 'Receive',
			description: 'Collect wastes from other EcoChampions',
		},
		{
			id: nanoid(),
			icon: <Autorenew sx={{ width: '6.25rem', height: '6.25rem', color: gray.in_between }}/>,
			title: 'Recycle',
			description: 'Refurbish or convert waste to useful items',
		},
		{
			id: nanoid(),
			icon: <Wallet sx={{ width: '6.25rem', height: '6.25rem', color: gray.in_between }}/>,
			title: 'Sell',
			description: 'Earn cash from the EcoProduct',
		}
	]
];