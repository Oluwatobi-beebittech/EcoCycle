import { API } from '@API';
import { getAPIBaseURL } from 'Environment';

export type LoginUserDto = {
    email: string;
    password: string;
};

export const LoginUser = async (userDetails: LoginUserDto) => {
	const route = '/auth/login';

	return await API.POST(getAPIBaseURL(), route, userDetails);
};