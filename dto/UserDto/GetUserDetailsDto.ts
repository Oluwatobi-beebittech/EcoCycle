import type { LazerPayApiKeyDto } from '../LazerPayApiKeyDto';
import type { CreateUserDto } from './CreateUserDto';

export type GetUserDetailsDto = Omit<CreateUserDto, 'password'> & {
	userId: string;
	lazerPayKey:LazerPayApiKeyDto;
};