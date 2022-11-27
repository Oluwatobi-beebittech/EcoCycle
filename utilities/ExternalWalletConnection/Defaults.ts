import {
	getChainBlockExplorerUrl,
	getChainCurrencyName,
	getChainCurrencySymbol,
	getChainId,
	getChainName,
	getChainRPCUrl,
	getChainCurrencyDecimals,
	getEcoTokenAddress,
	getEcoTokenDecimals,
	getEcoTokenLogoUrl,
	getEcoTokenSymbol
} from 'Environment';

import type { ChainDetails, ConnectionStatus, EcoTokenDetails } from './Types';

export const connectionFailed: ConnectionStatus = {
	statusMessage: 'Unable to connect to wallet.',
	hasError: true,
	isSuccess: false,
};

export const connectionSuccess: ConnectionStatus = {
	statusMessage: 'Wallect connected successfully.',
	hasError: false,
	isSuccess: true,
};

export const chainDetails: ChainDetails = {
	blockExplorerUrls: [ getChainBlockExplorerUrl() ],
	chainId: getChainId(),
	chainName: getChainName(),
	nativeCurrency: {
		name: getChainCurrencyName(),
		symbol: getChainCurrencySymbol(),
		decimals: getChainCurrencyDecimals(),
	},
	rpcUrls: [ getChainRPCUrl() ]
};

export const ecoCycleTokenDetails: EcoTokenDetails = {
	address: getEcoTokenAddress(),
	symbol: getEcoTokenSymbol(),
	decimals: getEcoTokenDecimals(),
	image: getEcoTokenLogoUrl(),
};