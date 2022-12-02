import { Box, Typography } from '@mui/material';
import * as React from 'react';

import { ColourPalette } from '@Styles';

const { gray } = ColourPalette;

export const PotentialPartners: React.FC = (): JSX.Element => {

	return <Box
		id="potential-partners"
		sx={
			{
				borderRadius: 'var(--border-radius)',
				backgroundColor: gray.in_between,
				padding: '4.1875rem 3.1875rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				marginBottom: '4rem'
			}
		}>

		<Typography
			variant='h1'
			sx={{ lineHeight: '4rem' }}
			align='center'
		>
				Potential Partners
		</Typography>
		<Box sx={{
			display: 'flex',
			height: 224,
			alignItems: 'center',
			justifyContent: 'center',
			gap: '20%'
		}} >
			<p>Egoras</p>
			<p>Lazer Pay</p>
		</Box>
	</Box>;
};