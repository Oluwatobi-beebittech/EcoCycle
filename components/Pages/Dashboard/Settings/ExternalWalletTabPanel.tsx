import { ContentCopyOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, ClickAwayListener, OutlinedInput, Tooltip, Typography }  from '@mui/material';
import NextImage from 'next/image';
import * as React from 'react';

import { useCopyToClipboard } from '@Hooks';
import MetamaskIcon from 'public/metamask.png';

type Props = {
	currentTabPanelIndex: number;
	index: number;
}
export const ExternalWalletTabPanel: React.FC<Props> = ({ currentTabPanelIndex, index }):JSX.Element => {
	const { isItemCopied, clearIsItemCopied, copyItem } = useCopyToClipboard();
	const isExternalWalletConnected=true;
	const walletAddress='0xhsggg';
	const metamaskStatus = isExternalWalletConnected ? 'Metamask connected' : 'Metamask not connected';
	const walletAddressCopyStatus = isExternalWalletConnected ? 'Wallet Address Copied' : 'No wallet address';

	return (
		<Box hidden={currentTabPanelIndex !== index} sx={{ marginTop: '2rem' }}>
			<Box
				sx={{ display: 'flex', flexDirection: 'column', gap: '2rem',  width: '50%', alignItems: 'center' }}>
				<NextImage
					src={MetamaskIcon}
					alt='Metamask'
					style={{ marginLeft: 'auto', marginRight: 'auto' }}
				/>
				<Typography fontWeight='bold'>{metamaskStatus}</Typography>
				<ClickAwayListener onClickAway={clearIsItemCopied}>
					<OutlinedInput
						value={isExternalWalletConnected ? walletAddress : ''}
						size='small'
						id='wallet-address-copy'
						readOnly
						fullWidth
						endAdornment={
							<InputAdornment position='end'>
								<Tooltip placement='top' title={walletAddressCopyStatus} open={isItemCopied}>
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
				<Button
					variant='contained'
					size='small'
					color={isExternalWalletConnected ? 'error' : 'primary'}
					sx={{ width: 'fit-content' }}
				>
					{isExternalWalletConnected ? 'Disconnect' : 'Connect'}
				</Button>
			</Box>
		</Box>
	);

};