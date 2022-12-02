import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import { RootReducer } from './RootReducer';

export const Store = configureStore({
	reducer: RootReducer,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;