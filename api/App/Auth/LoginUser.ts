import { API } from '@API';
import { getAPIBaseURL } from 'Environment';

export type LoginUserDto = {
    email: string;
    password: string;
};

type LoginResponseDto = {
    access_token: string;
}

export const LoginUser = async (userDetails: LoginUserDto) => {
	const route = '/auth/login';

	return await API.POST<LoginUserDto, LoginResponseDto>(getAPIBaseURL(), route, userDetails);
};