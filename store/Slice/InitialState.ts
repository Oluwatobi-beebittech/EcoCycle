import type { InitialState } from './Types';

export const initialState: InitialState = {
	isLoading: false,
	hasError: false,
	errorMessage: '',
	data: {}
};