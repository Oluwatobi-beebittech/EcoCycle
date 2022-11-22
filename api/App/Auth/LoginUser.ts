import { API } from '@API';
import { LoginUserDto, LoginResponseDto } from '@Dto';
import { getAPIBaseURL } from 'Environment';

export const LoginUser = async (userDetails: LoginUserDto) => {
	const route = '/auth/login';

	return await API.POST<LoginUserDto, LoginResponseDto>(getAPIBaseURL(), route, userDetails);
};