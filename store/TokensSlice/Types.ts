import { Coins } from '@Utilities';

import type { EcoTokenBalanceDto } from '@Dto';

export type TokenBalance = EcoTokenBalanceDto;

type AllTokensData = {
	[Coins.ECO]: TokenBalance;
	[Coins.USDT]: TokenBalance;
	[Coins.USDC]: TokenBalance;
	[Coins.BUSD]: TokenBalance;
	[Coins.DAI]: TokenBalance;
};

export type TokensState = {
	isEcoTokenLoading: boolean;
	isStableCoinsLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	data: Partial<AllTokensData>;
};