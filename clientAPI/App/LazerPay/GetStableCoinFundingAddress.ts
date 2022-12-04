import { API } from '@API';
import { Coins } from '@Utilities';
import { getAPIBaseURL } from 'Environment';

import { getAuthHeader } from '../Auth';

export const GetStableCoinFundingAddress = async (coin: Coins) => {
	const route = '/tokens/address';

	return await API.GET<any, {address: string}>(
		getAPIBaseURL(), route, { coin }, {
			...getAuthHeader()
		}
	);
};