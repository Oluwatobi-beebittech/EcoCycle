import { buildURL } from '../URL';
import { axios, AxiosRequestConfig } from './HTTPInstance';

export const getAbortController = () => new AbortController();

export const sendRequest = <T, K>(requestConfig: AxiosRequestConfig<T>): Promise<K> => {
	return axios
		.request(requestConfig)
		.then(response => Promise.resolve(response.data))
		.catch(err => Promise.reject(
			{
				data: err?.response?.data,
				status: err?.response?.status,
				statusText: err?.response?.statusText,
			}));
};

export const getRequest = <T, K>(
	baseURL: string,
	route: string,
	params: object | undefined = {},
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T, K>({
		params,
		url: buildURL(baseURL, route),
		method: 'GET',
		...optionalConfig
	});
};

export const postRequest = <T, K>(
	baseURL: string,
	route: string,
	body: T,
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T, K>({
		url: buildURL(baseURL, route),
		method: 'POST',
		data: body,
		...optionalConfig
	});
};

export const putRequest = <T, K>(
	baseURL: string,
	route: string,
	body: T,
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T, K>({
		url: buildURL(baseURL, route),
		method: 'PUT',
		data: body,
		...optionalConfig
	});
};

export const deleteRequest = <T, K>(
	baseURL: string,
	route: string,
	params: object | undefined={},
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T, K>({
		params,
		url: buildURL(baseURL, route),
		method: 'DELETE',
		...optionalConfig
	});
};

export const patchRequest = <T, K>(
	baseURL: string,
	route: string,
	body: T,
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T, K>({
		url: buildURL(baseURL, route),
		method: 'PATCH',
		data: body,
		...optionalConfig
	});
};