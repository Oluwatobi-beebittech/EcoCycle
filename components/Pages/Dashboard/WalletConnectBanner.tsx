import { ContentCopyOutlined, Brightness1, Brightness1Outlined, AddLink, InfoOutlined } from '@mui/icons-material';
import { Alert, Box, IconButton, Link, OutlinedInput, InputAdornment,  Tooltip, Typography, ClickAwayListener, AlertTitle } from '@mui/material';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

import { FormStatusAlert,LoadingPopup, Modal, WalletConnectionButton } from '@Components';
import { useCopyToClipboard, useFormSubmit } from '@Hooks';
import { connectExternalWallet, switchToDeployedChainNetwork, chainDetails, WebRoute } from '@Utilities';
import MetamaskIcon from 'public/metamask.png';

import { WalletButtonItems } from './WalletButtonItems';

type Props = {
    fullName: string;
    isExternalWalletConnected: boolean;
	isLazerPayKeysPresent: boolean;
    walletAddress?: string | undefined;
}
export const WalletConnectBanner: React.FC<Props> = (
	{ fullName, walletAddress, isExternalWalletConnected, isLazerPayKeysPresent }
): JSX.Element => {
	const { isItemCopied, clearIsItemCopied, copyItem } = useCopyToClipboard();
	const [ isModalOpen, setIsModalOpen ] = React.useState<boolean>(false);
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();
	const router = useRouter();

	return <><Box sx={{ width: '100%' }}>
		<Typography variant='subtitle1'>Welcome {fullName}</Typography>
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
			{!isExternalWalletConnected && <Tooltip title='Connect an external wallet'>
				<IconButton onClick={() => setIsModalOpen(true)}>
					<AddLink sx={{ fontSize: '1.3rem', color: 'var(--green-500)' }}/>
				</IconButton>
			</Tooltip>}
			{isExternalWalletConnected && <><NextImage
				src={MetamaskIcon}
				alt='Metamask'
				width='25'
				height='25'
			/>
			<Tooltip placement='top' title='To disconnect account from Metamask, go to the Metamask Wallet'>
				<InfoOutlined fontSize='small'/>
			</Tooltip>
			</>}

		</Box>
	</Box>
	{
		!isExternalWalletConnected && <Alert severity="info">
			<AlertTitle><b>Metamask external wallet not connected</b></AlertTitle>
			Click on the button <AddLink sx={{ fontSize: '1.3rem', color: 'var(--green-500)'}}/> to connect to your Metamask wallet.
		</Alert>
	}
	{
		!isLazerPayKeysPresent && <Alert severity="info">
			<AlertTitle><b>Lazerpay keys not found</b></AlertTitle>
			Lazerpay testnet public and secret keys were not detected on your account. To rectify,
			<ol>
				<li>Visit Lazerpay at <a href="https://lazerpay.finance/">https://lazerpay.finance/</a>.</li>
				<li>Go to the developer menu section and copy the testnet public and secret keys. </li>
				<li>Add the keys to the API keys tab of your dashboard&apos;s EcoCycle settings.
					<Link component='button' underline='hover' onClick={() => router.push({
						pathname: WebRoute.DASHBOARD_SETTINGS,
						query: { tabIndex: 1 }
					})}>
						 &nbsp;Click here
					</Link> to navigate to API keys tab.
				</li>
			</ol>

		</Alert>
	}
	<Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} title='Connect Wallet'>
		<Box sx={{ display: 'flex', flexDirection: 'column',justifyContent: 'center', gap: 'var(--gap)' }}>
			{WalletButtonItems.map(
				({ isWalletDetected, walletIcon, walletName }) =>
					<WalletConnectionButton
						key={walletName.toLowerCase()}
						isWalletDetected={isWalletDetected}
						walletName={walletName}
						walletIcon={walletIcon}
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

							setIsModalOpen(false);
						}}
					/>)}
		</Box>
	</Modal>
	<FormStatusAlert
		hasError={hasError}
		hasSuccess={hasSuccess}
		successMessage={successMessage}
		errorMessage={errorMessage}
		update={update}
	/>
	<LoadingPopup isOpen={isLoading}/>
	</>;
};