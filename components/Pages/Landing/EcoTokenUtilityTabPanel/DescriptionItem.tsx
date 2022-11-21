import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import * as React from 'react';

import { ColourPalette } from '@Styles';

const { primary } = ColourPalette;

type Props = {
    description: string;
    icon: React.ReactElement;
    title: string;
}
export const DescriptionItem: React.FC<Props> = ({ icon, title, description }): JSX.Element => {
	return <Box sx ={
		{
			display: 'flex',
			flexDirection: 'column',
			height: '18.125rem',
			justifyContent: 'space-evenly',
		}
	}>
		<Box sx={
			{
				backgroundColor: primary.light,
				borderRadius: 'var(--border-radius)',
				padding: '2.6875rem',
				width: '8.125rem',
				height: '8.125rem',
				alignItems:'center',
				justifyItems: 'center',
				display: 'grid'
			}
		}>
			{icon}
		</Box>
		<Typography
			variant='h2'
			align='center'
		>
			{title}
		</Typography>
		<Typography
			variant='body1'
			align='center'
		>
			{description}
		</Typography>
	</Box>;
};