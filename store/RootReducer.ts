import { CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit';

import { UserSliceReducer as UserSlice, UserState } from './UserSlice';

export const RootReducer: Reducer<CombinedState<{
    UserSlice: UserState;
}>, any> = combineReducers({
	UserSlice,
});