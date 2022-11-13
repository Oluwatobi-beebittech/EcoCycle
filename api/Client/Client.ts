import { buildURL } from '../URL';
import { axios, AxiosRequestConfig } from './HTTPInstance';

export const getAbortController = () => new AbortController();

export const sendRequest = <T>(requestConfig: AxiosRequestConfig<T>): Promise<T> => {
	return axios
		.request(requestConfig)
		.then(response => Promise.resolve(response.data))
		.catch(err => Promise.reject(
			{
				config: err?.config,
				data: err?.response?.data,
				headers: err?.response?.headers,
				request: err?.request,
				status: err?.response?.status,
				statusText: err?.response?.statusText,
			}));
};

export const getRequest = <T>(
	baseURL: string,
	route: string,
	params: object | undefined = {},
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T>({
		params,
		url: buildURL(baseURL, route),
		method: 'GET',
		...optionalConfig
	});
};

export const postRequest = <T>(
	baseURL: string,
	route: string,
	body: T,
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T>({
		url: buildURL(baseURL, route),
		method: 'POST',
		data: body,
		...optionalConfig
	});
};

export const putRequest = <T>(
	baseURL: string,
	route: string,
	body: T,
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T>({
		url: buildURL(baseURL, route),
		method: 'PUT',
		data: body,
		...optionalConfig
	});
};

export const deleteRequest = <T>(
	baseURL: string,
	route: string,
	params: object | undefined={},
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T>({
		params,
		url: buildURL(baseURL, route),
		method: 'DELETE',
		...optionalConfig
	});
};

export const patchRequest = <T>(
	baseURL: string,
	route: string,
	body: T,
	optionalConfig: object | undefined={}
) => {
	return sendRequest<T>({
		url: buildURL(baseURL, route),
		method: 'PATCH',
		data: body,
		...optionalConfig
	});
};