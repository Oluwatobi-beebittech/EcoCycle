import { Box, Typography } from '@mui/material';
import NextImage from 'next/image';
import * as React from 'react';

import { ColourPalette } from '@Styles';
import EgorasLogo from 'public/egoras-logo.png';
import LazerPayLogo from 'public/lazerpay_logo.png';

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
			<NextImage
				src={EgorasLogo}
				alt="Picture of the author"
				width="300"
			/>
			<NextImage
				src={LazerPayLogo}
				alt="Picture of the author"
				width="300"
			/>
		</Box>
	</Box>;
};