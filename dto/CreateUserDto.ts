import { EcoChampion } from '@Utilities';

export type CreateUserDto = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    ecoChampion: EcoChampion;
};