import { ContentCopyOutlined } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, ClickAwayListener, OutlinedInput, Tooltip, Typography }  from '@mui/material';
import NextImage from 'next/image';
import * as React from 'react';

import { FormStatusAlert, LoadingPopup } from '@Components';
import { useCopyToClipboard, useFormSubmit } from '@Hooks';
import { switchToDeployedChainNetwork, connectExternalWallet, chainDetails } from '@Utilities';
import MetamaskIcon from 'public/metamask.png';

type Props = {
	currentTabPanelIndex: number;
	index: number;
	walletAddress: string;
	isExternalWalletConnected: boolean;
}
export const ExternalWalletTabPanel: React.FC<Props> = (
	{ currentTabPanelIndex, index, isExternalWalletConnected, walletAddress }
):JSX.Element => {
	const { isItemCopied, clearIsItemCopied, copyItem } = useCopyToClipboard();
	const metamaskStatus = isExternalWalletConnected ? 'Metamask connected' : 'Metamask not connected';
	const walletAddressCopyStatus = isExternalWalletConnected ? 'Wallet Address Copied' : 'No wallet address';
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();

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
				{!isExternalWalletConnected &&
					<Button
						variant='contained'
						size='small'
						color={'primary'}
						sx={{ width: 'fit-content' }}
						onClick={async () => {
							update({ isLoading: true });
							const {
								isSuccess: connectSuccess,
								hasError: connectError,
								statusMessage: connectStatusMessage
							} = await connectExternalWallet();
							update({
								isLoading: false,
								hasError: connectError,
								hasSuccess: connectSuccess,
								errorMessage: connectStatusMessage,
								successMessage: connectStatusMessage
							});

							if(connectSuccess) {
								update({ isLoading: true });
								const {
									isSuccess: switchSuccess,
									hasError: switchError,
									statusMessage: switchStatusMessage
								} = await switchToDeployedChainNetwork(chainDetails);
								update({
									isLoading: false,
									hasError: switchError,
									hasSuccess: switchSuccess,
									errorMessage: switchStatusMessage,
									successMessage: switchStatusMessage
								});
							}
						}}
					>
						Connect
					</Button>
				}
			</Box>
			<FormStatusAlert
				hasError={hasError}
				hasSuccess={hasSuccess}
				successMessage={successMessage}
				errorMessage={errorMessage}
				update={update}
			/>
			<LoadingPopup isOpen={isLoading}/>
		</Box>
	);

};