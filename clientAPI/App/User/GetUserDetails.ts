import { API } from '@API';
import { GetUserDetailsDto } from '@Dto';
import { getAPIBaseURL } from 'Environment';

import { getAuthHeader } from '../Auth';

export const GetUserDetails = async (): Promise<GetUserDetailsDto> => {
	const route = '/users';

	return await API.GET(getAPIBaseURL(), route, {}, {
		...getAuthHeader()
	});
};