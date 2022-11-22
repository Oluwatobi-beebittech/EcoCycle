import { ArrowForward, Info } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Typography, FormControl,FormLabel,FormControlLabel, Radio, RadioGroup, TextField, Tooltip } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { API } from '@API';
import { FormStatusAlert } from '@Components';
import { useFormSubmit } from '@Hooks';
import { EcoChampion } from '@Utilities';


type SignUpInputs = {
	firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  	confirmPassword: string;
	ecoChampion: EcoChampion;
};

export const SignUp: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm<SignUpInputs>();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();

	return <Box sx={
		{ width: '100%',
			marginTop: '5rem',
			display: 'flex',
			flexDirection: 'row',
			paddingBottom: '5rem'
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
			<Typography variant='h1' sx={{ lineHeight: '4rem', textAlign: 'center', }}>SignUp</Typography>
			<FormControl sx={{ width: '50%', marginX: 'auto', gap: '2rem' }}>
				<TextField
					required
					id="outlined-name"
					label="Firstname"
					type='text'
					aria-required="true"
					error={Boolean(errors?.firstName)}
					aria-invalid={Boolean(errors?.firstName)}
					helperText={errors?.firstName?.message}
					{...register('firstName', { required: 'First name is required' })}
				/>
				<TextField
					required
					id="outlined-name"
					label="Lastname"
					type='text'
					aria-required="true"
					error={Boolean(errors?.lastName)}
					aria-invalid={Boolean(errors?.lastName)}
					helperText={errors?.lastName?.message}
					{...register('lastName', { required: 'Last name is required' })}
				/>
				<TextField
					required
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
					required
					id="outlined-name"
					label="Phone number"
					type="tel"
					aria-required="true"
					error={Boolean(errors?.phoneNumber)}
					aria-invalid={Boolean(errors?.phoneNumber)}
					helperText={errors?.phoneNumber?.message}
					{...register('phoneNumber', { required: 'Phone number is required' })}
				/>
				<TextField
					required
					id="outlined-name"
					label="Password"
					aria-required="true"
					error={Boolean(errors?.password)}
					aria-invalid={Boolean(errors?.password)}
					helperText={errors?.password?.message}
					type='password'
					{...register('password', { required: 'Password is required' })}
				/>
				<TextField
					required
					id="outlined-name"
					label="Confirm password"
					aria-required="true"
					error={Boolean(errors?.confirmPassword)}
					aria-invalid={Boolean(errors?.confirmPassword)}
					helperText={errors?.confirmPassword?.message}
					type='password'
					{...register('confirmPassword', { required: 'Confirm password is required' })}
				/>

				<>
					<FormLabel id="demo-radio-buttons-group-label">Which category of EcoChampions best describe you? <Tooltip title="Specifies the type of activity you want to perform in the accoun."><Info fontSize='small'/></Tooltip></FormLabel>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue={EcoChampion.ECO_COLLECTOR}
						{...register('ecoChampion', { required: 'Ecochampion group is required' })}
					>
						<FormControlLabel value={EcoChampion.ECO_COLLECTOR} control={<Radio />} label="Collector" />
						<FormControlLabel value={EcoChampion.ECO_PROCESSOR} control={<Radio />} label="Processor" />
					</RadioGroup>
				</>
				<LoadingButton
					loading={isLoading}
					loadingPosition="end"
					disabled={isLoading}
					endIcon={<ArrowForward/>}
					variant='contained'
					size="large"
					sx={{ width: 'content', marginX: 'auto' }}
					onClick={handleSubmit(async (formData) => {
						update({ isLoading: true });
						//eslint-disable-next-line no-unused-vars
						const { confirmPassword, ...data } = formData;
						let newuserInfo;
						try{
							newuserInfo = await API.CreateNewUser(data);
						}catch(error: any) {
							update({
								isLoading: false,
								hasError: true,
								errorMessage: `${error?.status}: ${error?.statusText} ${error?.data?.message?.[0]}` ?? 'Error encountered while saving your details. Kindly try again.'
							});
							return;
						}

						update({ isLoading: false, hasError: false, hasSuccess: true, successMessage: 'Registration successful' });
						return newuserInfo;
					})}
				>
                    Signup
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