import { VerticalAlignTop, SouthEast } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';

export const BalanceCard: React.FC = (): JSX.Element => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--gray-200)', padding: '2.5rem', gap: '1rem' }}>
			<Typography variant="caption" fontSize='1rem'>Balance</Typography>
			<Typography fontWeight='bold' fontSize="2rem">&#8358; 5000</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
				<Button variant="contained" size="small" endIcon={<VerticalAlignTop />}>
                    Topup
				</Button>
				<Button variant="outlined" size="small" endIcon={<SouthEast/>}>
                    Withdraw
				</Button>
			</Box>
		</Box>
	);
};