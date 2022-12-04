import { API } from '@API';
import { EcoTokenBalanceDto } from '@Dto';
import { getAPIBaseURL } from 'Environment';

import { getAuthHeader } from '../Auth';

export const GetEcoTokenBalance = async (ecoTokenAddress: string) => {
	const route = `/ecotoken/balance/${ecoTokenAddress}`;

	return await API.GET<any, EcoTokenBalanceDto>(
		getAPIBaseURL(), route, {}, {
			...getAuthHeader()
		}
	);
};