import { Box, Typography } from '@mui/material';
import * as React from 'react';

type Props = {
    featureName: string;
    shortDescription: string;
}
export const ComingSoon: React.FC<Props> = ({ featureName, shortDescription }): JSX.Element => {
	return (
		<Box sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column',gap: '1.5rem' }}>
			<Typography variant='h3'>
                🚧 Ecocycle is bringing {featureName} to you soon.
			</Typography>
			<Typography>{shortDescription}</Typography>
		</Box>
	);
};