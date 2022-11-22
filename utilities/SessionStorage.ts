const accessTokenKey = 'ecocycle_access_token';

export const setAccessToken = (token: string) => sessionStorage.setItem(accessTokenKey, token);
export const getAccessToken = () => sessionStorage.getItem(accessTokenKey);
export const removeAccessToken = () => sessionStorage.removeItem(accessTokenKey);