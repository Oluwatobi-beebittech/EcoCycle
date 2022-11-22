import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography, FormControl, TextField } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { API } from '@API';

type LoginInputs = {
  email: string;
  password: string;
};

export const Login: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>();

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
				<Button
					endIcon={<ArrowForward/>}
					variant='contained'
					size="large"
					sx={{ width: 'content', marginX: 'auto' }}
					onClick={handleSubmit(async (e) => {

						return await API.LoginUser(e);
					})}
				>
                    Login
				</Button>
			</FormControl>
		</Box>
	</Box>;
};