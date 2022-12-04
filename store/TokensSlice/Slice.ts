import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { API } from '@API';
import { AppThunk } from '@Store';
import { Coins } from '@Utilities';

import type { TokensState } from './Types';

import { tokensInitialState } from './InitialState';

const TokensSlice = createSlice({
	name: 'TokensSlice',
	initialState: tokensInitialState,
	reducers: {
		setState(state: TokensState, action: PayloadAction<Partial<TokensState>>) {
			return { ...state, ...action.payload };
		},
		setTokenBalance(state: TokensState, action: PayloadAction<TokensState['data']>) {
			const stateTokenData = { ...state.data, ...action.payload };

			return { ...state, data: { ...stateTokenData }, };
		},
	}
});

const {
	setState: _setState,
	setTokenBalance: _setTokenBalance,
} = TokensSlice.actions;

export const getEcoTokenBalance = (ecoTokenWalletAddress: string): AppThunk => async (dispatch) => {
	dispatch(
		_setState({
			isEcoTokenLoading: true,
		})
	);

	try {
		const response = await API.GetEcoTokenBalance(ecoTokenWalletAddress);
		dispatch(
			_setState({
				isEcoTokenLoading: false,
				hasError: false,
			})
		);
		dispatch(
			_setTokenBalance({
				[Coins.ECO]: response,
			})
		);
	} catch (error: any) {
		dispatch(
			_setState({
				isEcoTokenLoading: false,
				hasError: true,
				errorMessage: error?.data?.message,
			})
		);
	}
};

export const { reducer: TokensSliceReducer } = TokensSlice;