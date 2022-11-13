import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './InitialState';

const Slice = createSlice({
	name: 'Slice',
	initialState,
	reducers: {
		setState(state, action) {
			return { ...state, ...action.payload };
		},
	}
});

const {
	setState: _setState,
} = Slice.actions;


export const { reducer: SliceReducer } = Slice;