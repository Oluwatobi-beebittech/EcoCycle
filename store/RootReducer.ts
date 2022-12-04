import { CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit';

import { TokensSliceReducer as TokensSlice, TokensState } from './TokensSlice';
import { UserSliceReducer as UserSlice, UserState } from './UserSlice';

export const RootReducer: Reducer<CombinedState<{
    UserSlice: UserState;
    TokensSlice: TokensState;
}>, any> = combineReducers({
	UserSlice,
	TokensSlice
});