import { configureStore } from '@reduxjs/toolkit';

import { RootReducer } from './RootReducer';

export const Store = configureStore({
	reducer: RootReducer,
});