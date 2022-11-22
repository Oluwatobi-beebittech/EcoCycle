import { API } from '@API';
import { CreateUserDto } from '@Dto';
import { getAPIBaseURL } from 'Environment';

export const CreateNewUser = async (userDetails: CreateUserDto) => {
	const route = '/users';

	return await API.POST(getAPIBaseURL(), route, userDetails);
};