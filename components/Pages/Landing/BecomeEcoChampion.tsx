import { ArrowForward, GroupAdd } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import { useRouter, NextRouter } from 'next/router';
import * as React from 'react';

import { Button } from '@Components';
import { WebRoute } from '@Utilities';

export const BecomeEcoChampion: React.FC = (): JSX.Element => {
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
			<Typography variant='h1' sx={{ lineHeight: '4rem' }}> Become an EcoChampion<br/>today</Typography>
			<Typography variant='body1'>
				Join the <b>EcoChampions</b>
			</Typography>
			<Grid container spacing={2} alignItems='center'>
				<Grid item md={2}>
					<Button
						variant='contained'
						size='large'
						endIcon={<GroupAdd fontSize='large'/>}
						onClick={() => router.push(WebRoute.SIGNUP)}
					>
						Join
					</Button>
				</Grid>
				<Grid item md={5}>
					<Button
						variant='outlined'
						size='small'
						endIcon={<ArrowForward fontSize='large'/>}
						onClick={() => router.push(WebRoute.LEARN_COP_27)}
					>
						Read EcoCycle &amp; COP27
					</Button>
				</Grid>
			</Grid>
		</Box>
	</Box>;
};