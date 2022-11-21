import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography, FormControl, TextField } from '@mui/material';
import * as React from 'react';

export const Login: React.FC = (): JSX.Element => {
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
					helperText="Hello"
				/>
				<TextField
					id="outlined-name"
					label="Password"
					helperText="Hello"
					type='password'
				/>
				<Button
					endIcon={<ArrowForward/>}
					variant='contained'
					size="large"
					sx={{ width: 'content', marginX: 'auto' }}
				>
                    Login
				</Button>
			</FormControl>
		</Box>
	</Box>;
};