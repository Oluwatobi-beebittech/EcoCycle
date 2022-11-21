import { ArrowForward } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Box  from '@mui/material/Box';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@Components';

type Props = {
    description: string;
    link: string;
}
export const DescriptionItem: React.FC<Props> = ({ link, description }): JSX.Element => {
	return <Box sx ={
		{
			marginTop: '5rem',
			marginLeft: '2rem',
			display: 'flex',
			flexDirection:'column',
			gap: 'var(--gap)'
		}
	}>
		<Typography
			variant='body1'
		>
			{description}
		</Typography>
		<Link href={link}>
			<Button variant="outlined" size="small" endIcon={<ArrowForward/>}>Learn More</Button>
		</Link>
	</Box>;
};