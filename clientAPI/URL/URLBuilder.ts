const trimLeadingSlash = (path: string) => path[0] === '/'
	? path.substring(1)
	: path;

const trimTrailingSlash = (path: string) => path.substr(-1) === '/'
	? path.substr(0, path.length - 1)
	: path;

const trimPath = (path: string) => trimLeadingSlash(trimTrailingSlash(path));

export const buildURL = (baseURL: string, route: string): string => `${trimPath(baseURL)}/${trimPath(route)}`;

