import { API } from '@API';
import { EcoChampion } from '@Utilities';
import { getAPIBaseURL } from 'Environment';

export type CreateUserDto = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    ecoChampion: EcoChampion;
};

export const CreateNewUser = async (userDetails: CreateUserDto) => {
	const route = '/users';
	console.log({
		gg: getAPIBaseURL(),
		rr: route,
		userDetails
	});
	return await API.POST(getAPIBaseURL(), route, userDetails);
};