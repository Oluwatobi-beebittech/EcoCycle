type ConnectionStatus = {
    statusMessage: string;
    hasError: boolean;
    isSuccess: boolean;
    walletAddress?: string | undefined;
};

export const isWalletAvailable = (): boolean => global?.window && window.ethereum;

const connectionFailed: ConnectionStatus = {
	statusMessage: 'Unable to connect to wallet.',
	hasError: true,
	isSuccess: false,
};

const connectionSuccess: ConnectionStatus = {
	statusMessage: 'Wallect connected successfully.',
	hasError: false,
	isSuccess: true,
};

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

type EcoTokenDetails = {
    address: string;
    symbol: string;
    decimals: number;
    image: string;
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
		} else {
			console.log('Your loss!');
		}
	} catch (error) {
		console.log(error);
	}
};

type NativeCurrencyDetails = {
    decimals: number;
    name: string;
    symbol: string;
};

export type ChainDetails = {
    blockExplorerUrls: Array<string>;
    chainId: string;
    chainName: string;
    nativeCurrency: NativeCurrencyDetails;
    rpcUrls: Array<string>;
}

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
