import { getAccessToken } from '@Utilities';

export const getAuthHeader = () => {
	const authBearerToken = global?.window ? getAccessToken() : '';

	return {
		headers: {
			Authorization: `Bearer ${authBearerToken}`
		}
	};
};