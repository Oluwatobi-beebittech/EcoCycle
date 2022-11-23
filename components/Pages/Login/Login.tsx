import { ArrowForward } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, FormControl, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { API } from '@API';
import { FormStatusAlert } from '@Components';
import { LoginUserDto } from '@Dto';
import { useFormSubmit } from '@Hooks';
import { setAccessToken } from '@Utilities';
type LoginInputs = LoginUserDto;

export const Login: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();
	const router = useRouter();

	return <Box sx={
		{ width: '100%',
			height: '100vh',
			display: 'flex',
			flexDirection: 'row',
			textAlign: 'center',
		}
	}>
		<Box sx={
			{ width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: '5rem'
			}
		}>
			<Typography variant='h1' sx={{ lineHeight: '4rem' }}>Login</Typography>
			<FormControl sx={{ width: '50%', marginX: 'auto', gap: '2rem' }}>
				<TextField
					id="outlined-name"
					label="Email"
					type='email'
					aria-required="true"
					error={Boolean(errors?.email)}
					aria-invalid={Boolean(errors?.email)}
					helperText={errors?.email?.message}
					{...register('email', { required: 'Email is required' })}
				/>
				<TextField
					id="outlined-name"
					label="Password"
					type='password'
					aria-required="true"
					error={Boolean(errors?.password)}
					aria-invalid={Boolean(errors?.password)}
					helperText={errors?.password?.message}
					{...register('password', { required: 'Password is required' })}
				/>
				<LoadingButton
					loading={isLoading}
					loadingPosition="end"
					disabled={isLoading}
					endIcon={<ArrowForward/>}
					variant='contained'
					size="large"
					sx={{ width: 'content', marginX: 'auto' }}
					onClick={handleSubmit(async (formData) => {
						let loginDetails;
						try{
							loginDetails = await API.LoginUser(formData);
						}catch(error: any) {
							update({
								isLoading: false,
								hasError: true,
								errorMessage: `${error?.status}: ${error?.statusText} ${error?.data?.message?.[0]}` ?? 'Unable to login. Check the email and password again'
							});
							return;
						}

						update({ isLoading: false, hasError: false, hasSuccess: true, successMessage: 'Login successful' });
						setAccessToken(loginDetails.access_token);
						router.push('/dashboard');
						return loginDetails;
					})}
				>
                    Login
				</LoadingButton>
			</FormControl>
		</Box>
		<FormStatusAlert
			hasError={hasError}
			hasSuccess={hasSuccess}
			successMessage={successMessage}
			errorMessage={errorMessage}
			update={update}
		/>
	</Box>;
};