import type { ChainDetails, ConnectionStatus, EcoTokenDetails } from './Types';

import { connectionFailed, connectionSuccess } from './Defaults';

export const isWalletAvailable = (): boolean => global?.window && window.ethereum;

export const connectExternalWallet = async (): Promise<ConnectionStatus> => {
	if(!isWalletAvailable()) return connectionFailed;

	try {
		const walletAddress = await window.ethereum.request({
			method: 'eth_requestAccounts',
		});

		return {
			...connectionSuccess,
			walletAddress: walletAddress[0],
		};
	} catch (err) {
		return connectionFailed;
	}
};

export const registerEcoCycleToken = async (ecoTokenDetails: EcoTokenDetails) => {

	if(!isWalletAvailable()) return connectionFailed;

	try {
		const wasAdded = await window.ethereum.request({
			method: 'wallet_watchAsset',
			params: {
				type: 'ERC20',
				options: ecoTokenDetails,
			},
		});

		if (wasAdded) {
			console.log('Thanks for your interest!');
			return {
				...connectionSuccess,
				statusMessage: 'EcoToken linked successfully'
			};

		} else {
			console.log('Your loss!');
			return {
				...connectionFailed,
				statusMessage: 'EcoToken linking failed'
			};
		}

	} catch (error) {
		console.log(error);
		return {
			...connectionFailed,
			statusMessage: 'EcoToken linking failed'
		};
	}
};

const addDeployedChainNetwork = async (chainDetails: ChainDetails): Promise<ConnectionStatus> => {
	try{
		await window.ethereum.request({
			method: 'wallet_addEthereumChain',
			params: [
				chainDetails,
			],
		});

		return { ...connectionSuccess, statusMessage: `Added ${chainDetails.chainName} network` };
	}catch(error) {
		return { ...connectionFailed, statusMessage: `Failed to add ${chainDetails.chainName} network` };
	}
};

export const switchToDeployedChainNetwork = async (chainDetails: ChainDetails): Promise<ConnectionStatus> => {
	try{
		await window.ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [ { chainId: chainDetails.chainId } ],
		});

		return { ...connectionSuccess, statusMessage: `Added and switched to ${chainDetails.chainName} network successfully` };
	}catch(error: any) {
		if (error.code === 4902) addDeployedChainNetwork(chainDetails);

		return { ...connectionFailed, statusMessage: `Failed switch to ${chainDetails.chainName} network` };
	}
};
