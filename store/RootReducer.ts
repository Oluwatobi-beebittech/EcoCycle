import { AnyAction, CombinedState, combineReducers, Reducer } from '@reduxjs/toolkit';

import { SliceReducer as Slice, initialState } from './Slice';

export const RootReducer: Reducer<CombinedState<{
    Slice: typeof initialState;
}>, AnyAction> = combineReducers({
	Slice,
});

export type RootState = ReturnType<typeof RootReducer>;