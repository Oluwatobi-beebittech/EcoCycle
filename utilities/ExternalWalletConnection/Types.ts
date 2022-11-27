export type ConnectionStatus = {
    statusMessage: string;
    hasError: boolean;
    isSuccess: boolean;
    walletAddress?: string | undefined;
};

export type EcoTokenDetails = {
    address: string;
    symbol: string;
    decimals: number;
    image: string;
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
