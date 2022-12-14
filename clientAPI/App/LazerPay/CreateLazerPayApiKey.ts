import { API } from '@API';
import { BasicApiResponseStatusDto, LazerPayApiKeyDto } from '@Dto';
import { getAPIBaseURL } from 'Environment';

import { getAuthHeader } from '../Auth';

export const CreateLazerPayApiKey = async (lazerPayApiKey: LazerPayApiKeyDto) => {
	const route = '/token';

	return await API.POST<LazerPayApiKeyDto, BasicApiResponseStatusDto>(
		getAPIBaseURL(), route, lazerPayApiKey, {
			...getAuthHeader()
		}
	);
};