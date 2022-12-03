import { Toll } from '@mui/icons-material';
import { Button, Box, Grid,  Typography } from '@mui/material';
import { useRouter, NextRouter } from 'next/router';
import * as React from 'react';

import { WebRoute } from '@Utilities';

export const GetRewards: React.FC = (): JSX.Element => {
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
			<Typography variant='h1' sx={{ lineHeight: '4rem' }}> Get rewards as tokens for <br/>contributing to waste<br/>recycling</Typography>
			<Typography variant='body1'>
				<b>EcoTokens</b>  are issued to participants in the waste recycling process. <br/>
                These participants are the world&apos;s <b>EcoChampions</b>.</Typography>
			<Grid container spacing={2}>
				<Grid item md={4}>
					<Button
						variant='contained'
						size='large'
						endIcon={<Toll fontSize='large'/>}
						onClick={() => router.push(WebRoute.SIGNUP)}
					>
						Get Rewards
					</Button>
				</Grid>
			</Grid>
		</Box>
	</Box>;
};