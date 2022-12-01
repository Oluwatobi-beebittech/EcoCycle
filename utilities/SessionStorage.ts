import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const accessTokenKey: string = 'ecocycle_access_token';

export const setAccessToken = (token: string) => cookies.set(accessTokenKey, token, { path: '/' });;
export const getAccessToken = () => cookies.get(accessTokenKey);
export const removeAccessToken = () => cookies.remove(accessTokenKey);