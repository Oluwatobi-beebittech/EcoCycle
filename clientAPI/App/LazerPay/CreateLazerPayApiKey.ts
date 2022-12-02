import { API } from '@API';
import { LazerPayApiKeyDto } from '@Dto';
import { getAPIBaseURL } from 'Environment';

export const CreateLazerPayApiKey = async (lazerPayApiKey: LazerPayApiKeyDto) => {
	const route = '/token';

	return await API.POST(getAPIBaseURL(), route, lazerPayApiKey);
};