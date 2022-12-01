import { API } from '@API';
import { getAPIBaseURL } from 'Environment';

import { getAuthHeader } from './AuthHeader';

export const VerifyAuth = async () => {
	const route = '/auth/verify';

	return await API.GET(getAPIBaseURL(), route, {}, {
		...getAuthHeader(),
	});
};