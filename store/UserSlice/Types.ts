import type { GetUserDetailsDto } from '@Dto';

type UserDetails = Partial<GetUserDetailsDto>;

export type UserState = {
	isLoading: boolean;
	hasError: boolean;
	errorMessage: string;
	data: UserDetails;
};