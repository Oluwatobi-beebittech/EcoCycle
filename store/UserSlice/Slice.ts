import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { API } from '@API';
import { AppThunk } from '@Store';

import type { UserState } from './Types';

import { initialState } from './InitialState';

const UserSlice = createSlice({
	name: 'UserSlice',
	initialState,
	reducers: {
		setState(state: UserState, action: PayloadAction<Partial<UserState>>) {
			return { ...state, ...action.payload };
		},
	}
});

const {
	setState: _setState,
} = UserSlice.actions;

export const getUserDetails = (): AppThunk => async (dispatch) => {
	dispatch(
		_setState({
			isLoading: true,
		})
	);

	try {
		const response = await API.GetUserDetails();
		const lazerPayKey = response.lazerPayKey ?? { publicKey: '', secretKey:'' };
		dispatch(
			_setState({
				isLoading: false,
				hasError: false,
				data: {
					...response,
					lazerPayKey
				}
			})
		);
	} catch (error: any) {
		dispatch(
			_setState({
				isLoading: false,
				hasError: true,
				errorMessage: error?.data?.message,
			})
		);
	}
};

export const { reducer: UserSliceReducer } = UserSlice;