export const getAPIBaseURL = (): string => process.env.NEXT_PUBLIC_API_BASE_URL as string;

export const getChainBlockExplorerUrl = ():string => process.env.NEXT_PUBLIC_CHAIN_BLOCK_EXPLORER_URL as string;
export const getChainCurrencyDecimals = ():number => Number(process.env.NEXT_PUBLIC_CHAIN_CURRENCY_DECIMALS);
export const getChainCurrencyName = ():string => process.env.NEXT_PUBLIC_CHAIN_CURRENCY_NAME as string;
export const getChainCurrencySymbol = ():string => process.env.NEXT_PUBLIC_CHAIN_CURRENCY_SYMBOL as string;
export const getChainId = ():string => process.env.NEXT_PUBLIC_CHAIN_ID as string;
export const getChainName = ():string => process.env.NEXT_PUBLIC_CHAIN_NAME as string;
export const getChainRPCUrl = ():string => process.env.NEXT_PUBLIC_CHAIN_RPC_URL as string;

export const getEcoTokenAddress = ():string => process.env.NEXT_PUBLIC_ECO_TOKEN_ADDRESS as string;
export const getEcoTokenSymbol = ():string => process.env.NEXT_PUBLIC_ECO_TOKEN_SYMBOL as string;
export const getEcoTokenDecimals = ():string => process.env.NEXT_PUBLIC_ECO_TOKEN_DECIMALS as string;
export const getEcoTokenLogoUrl = ():string => process.env.NEXT_PUBLIC_ECO_TOKEN_LOGO_URL as string;