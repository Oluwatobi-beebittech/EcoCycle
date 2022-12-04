import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import { isProd } from 'Environment';

import { RootReducer } from './RootReducer';

export const Store = configureStore({
	reducer: RootReducer,
	devTools: !isProd()
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;