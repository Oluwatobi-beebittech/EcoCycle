import { GroupAdd } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';

import { Button } from '@Components';

export const BecomeEcoChampion: React.FC = (): JSX.Element => {
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
			<Grid container spacing={2}>
				<Grid item md={4}>
					<Button variant='contained' size='large' endIcon={<GroupAdd fontSize='large'/>}>Join</Button>
				</Grid>
			</Grid>
		</Box>
	</Box>;
};