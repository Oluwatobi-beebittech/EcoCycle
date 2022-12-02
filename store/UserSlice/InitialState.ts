import type { UserState } from './Types';

export const initialState: UserState = {
	isLoading: true,
	hasError: false,
	errorMessage: '',
	data: {}
};