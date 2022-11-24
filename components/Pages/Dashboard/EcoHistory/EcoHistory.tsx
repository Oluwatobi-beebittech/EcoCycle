import { Box,  Typography } from '@mui/material';
import * as React from 'react';

import { Table } from '@Components';

export const EcoHistory: React.FC = (): JSX.Element => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Typography variant='h3'>EcoHistory</Typography>
			<Table />
		</Box>
	);
};