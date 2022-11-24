import { ContentCopyOutlined, Brightness1, Brightness1Outlined, AddLink } from '@mui/icons-material';
import { Box, IconButton, OutlinedInput, InputAdornment,  Tooltip, Typography, ClickAwayListener } from '@mui/material';
import * as React from 'react';

import { Modal, WalletConnectionButton } from '@Components';
import { useCopyToClipboard } from '@Hooks';

import { WalletButtonItems } from './WalletButtonItems';

type Props = {
    fullName: string;
    isExternalWalletConnected: boolean;
    walletAddress?: string | undefined;
}
export const WalletConnectBanner: React.FC<Props> = (
	{ fullName, walletAddress, isExternalWalletConnected }
): JSX.Element => {
	const { isItemCopied, clearIsItemCopied, copyItem } = useCopyToClipboard();
	const [ isModalOpen, setIsModalOpen ] = React.useState<boolean>(false);

	return <><Box sx={{ width: '100%' }}>
		<Typography variant='subtitle1'>Welcome ${fullName}</Typography>
		<Box sx={{
			display: 'flex',
			flexDirection: 'row',
			gap: 'var(--gap)',
			alignItems: 'center'
		}}>
			{isExternalWalletConnected
				? <Brightness1 color='primary' sx={{ fontSize: '1rem' }}/>
				: <Brightness1Outlined sx={{ fontSize: '1rem' }}/>
			}
			<Typography variant='body1'>
				{isExternalWalletConnected ? 'External Wallet Connected' : 'No External Wallet'}
			</Typography>
		</Box>
		<Box sx={{
			display: 'flex',
			flexDirection: 'row',
			gap: 'var(--gap)',
			alignItems: 'center'
		}}>
			<ClickAwayListener onClickAway={clearIsItemCopied}>
				<OutlinedInput
					sx={{
						height: '1.5rem',
						fontWeight: 'bold'
					}}
					value={isExternalWalletConnected ? walletAddress : ''}
					size='small'
					id='wallet-address-copy'
					disabled endAdornment={
						<InputAdornment position='end'>
							<Tooltip placement='top' title={'Wallet Address Copied'} open={isItemCopied}>
								<IconButton
									onClick={() => copyItem('wallet-address-copy')}
									edge='end'
								>
									<ContentCopyOutlined sx={{ fontSize: '1rem' }}/>
								</IconButton>
							</Tooltip>
						</InputAdornment>
					}/>
			</ClickAwayListener>
			<Tooltip title='Connect an external wallet'>
				<IconButton onClick={() => setIsModalOpen(true)}>
					<AddLink sx={{ fontSize: '1.3rem', color: 'var(--green-500)' }}/>
				</IconButton>
			</Tooltip>
		</Box>
	</Box>
	<Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} title='Connect Wallet'>
		<Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', gap: 'var(--gap)' }}>
			{WalletButtonItems.map(
				({ isWalletDetected, walletIcon, walletName }) =>
					<WalletConnectionButton
						key={walletName.toLowerCase()}
						isWalletDetected={isWalletDetected}
						walletName={walletName}
						walletIcon={walletIcon}
					/>)}

		</Box>

	</Modal>
	</>;
};