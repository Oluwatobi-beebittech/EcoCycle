import { API } from '@API';
import { EcoPayDto } from '@Dto';
import { getAPIBaseURL } from 'Environment';

import { getAuthHeader } from '../Auth';

export const CreateEcoPayPayment = async (ecoPayDto: EcoPayDto) => {
	const route = '/ecopay';

	return await API.POST<EcoPayDto, any>(
		getAPIBaseURL(), route, ecoPayDto, {
			...getAuthHeader()
		}
	);
};