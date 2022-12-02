import { API } from '@API';
import { BasicApiResponseStatusDto, LazerPayApiKeyDto } from '@Dto';
import { getAPIBaseURL } from 'Environment';

import { getAuthHeader } from '../Auth';

export const UpdateLazerPayApiKey = async (lazerPayApiKey: LazerPayApiKeyDto) => {
	const route = '/token/update';

	return await API.PATCH<LazerPayApiKeyDto, BasicApiResponseStatusDto>(
		getAPIBaseURL(), route, lazerPayApiKey, {
			...getAuthHeader()
		}
	);
};