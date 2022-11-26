import { Brightness1, Brightness1Outlined } from '@mui/icons-material';
import { Button as MuiButton, ButtonProps, Box, Typography, Tooltip } from '@mui/material';
import NextImage, { StaticImageData } from 'next/image';
import * as React from 'react';

type Props = Omit<ButtonProps, 'sx'> & {
	isWalletDetected: boolean;
	walletIcon: StaticImageData;
	walletName: string;
};
export const WalletConnectionButton: React.FC<Props>  = (
	{ isWalletDetected, walletIcon, walletName, ...rest }
): JSX.Element =>
	<Tooltip
		open={!isWalletDetected}
		title={`${walletName} not detected. Install ${walletName} in browser`}
		placement='top'
	>
		<MuiButton sx={{
			height: '3.375rem',
			padding: '2rem',
			backgroundColor: 'var(--black-900)',
			color: 'var(--gray-200)',
			textTransform: 'none',
			marginX: 'auto',
			'&:hover': {
				backgroundColor: 'var(--gray-200)',
				color: 'var(--black-900)',
				border: '1px solid var(--black-900)'
			}
		}}
		{...rest}
		>
			<Box sx={{
				display: 'flex',
				flexDirection: 'row',
				gap: 'var(--gap)',
				alignItems: 'center'
			}}>
				<NextImage
					src={walletIcon}
					alt={walletName}
				/>
				<Box sx={{
					gap: '5px',
					textAlign: 'left'
				}}>
					<Typography fontWeight='bold'>{walletName}</Typography>
					<Box sx={{
						display: 'flex',
						flexDirection: 'row',
						gap: 'var(--gap)',
						alignItems: 'center'
					}}>
						{isWalletDetected
							? <Brightness1 color='primary' sx={{ fontSize: '1rem' }}/>
							: <Brightness1Outlined sx={{ fontSize: '1rem' }}/>
						}
						<Typography variant='body1'>
							{isWalletDetected ? 'Detected' : 'Not Detected'}
						</Typography>
					</Box>
				</Box>
			</Box>
		</MuiButton>
	</Tooltip>
;