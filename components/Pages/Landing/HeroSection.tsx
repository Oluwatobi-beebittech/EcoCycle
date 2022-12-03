import { NorthEast, Info } from '@mui/icons-material';
import { Button, Box, Grid, Typography } from '@mui/material';
import { useRouter, NextRouter } from 'next/router';
import * as React from 'react';

import { WebRoute } from '@Utilities';

export const HeroSection: React.FC = (): JSX.Element => {
	const router: NextRouter = useRouter();

	return <Box sx={
		{ width: '100%',
			height: '90vh',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		}
	}>
		<Box sx={
			{ width: '100%',
				height: '60%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly'
			}
		}>
			<Typography variant='h1' sx={{ lineHeight: '4rem' }}> Recycle waste <br/> for cash</Typography>
			<Typography variant='h3' sx={{ lineHeight: '4rem' }}> Earn cash as you give waste a new life</Typography>
			<Grid container spacing={2}>
				<Grid item md={3}>
					<Button
						variant='contained'
						size='large'
						endIcon={<NorthEast fontSize='large'/>}
						onClick={() => router.push(WebRoute.SIGNUP)}
					>
							Get Started
					</Button>
				</Grid>
				<Grid item md={3}>
					<Button
						variant='outlined'
						size='large'
						endIcon={<Info fontSize='large'/>}
						onClick={() => router.push(WebRoute.LEARN_MORE)}
					>Learn More
					</Button>
				</Grid>
			</Grid>
		</Box>
	</Box>;
};