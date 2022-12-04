import { Coins } from '@Utilities';

import type { EcoTokenBalanceDto } from '@Dto';

export type EcoTokenBalance = EcoTokenBalanceDto;

type AllTokensData = {
	[Coins.ECO]: EcoTokenBalance;
	[Coins.USDT]: string;
	[Coins.USDC]: string;
	[Coins.BUSD]: string;
	[Coins.DAI]: string;
};

export type TokensState = {
	isEcoTokenLoading: boolean;
	isStableCoinsLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	data: Partial<AllTokensData>;
};