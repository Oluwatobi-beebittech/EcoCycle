import { StaticImageData } from 'next/image';

import MetamaskIcon from 'public/metamask.png';

export type WalletItems = {
	isWalletDetected: boolean;
	walletIcon: StaticImageData;
	walletName: string;
};

export type WalletButtonArray = Array<WalletItems>;

export const WalletButtonItems: WalletButtonArray = [
	{
		isWalletDetected: global?.window
			? Boolean(window?.ethereum?.isMetaMask)
			: false,
		walletIcon: MetamaskIcon,
		walletName: 'Metamask'
	}
];