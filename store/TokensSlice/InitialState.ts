import type { TokensState } from './Types';

export const tokensInitialState: TokensState = {
	isStableCoinsLoading: true,
	isEcoTokenLoading: true,
	hasError: false,
	errorMessage: '',
	data: {}
};