import * as React from 'react';

import { isWalletAvailable } from '@Utilities';

type ConnectedWalletStatus = {
    isExternalWalletConnected: boolean;
    addresses: Array<string>;
};

const defaultConnectedWalletStatus: ConnectedWalletStatus = {
	isExternalWalletConnected: false,
	addresses: []
};

export const useGetConnectedWalletStatus = (): ConnectedWalletStatus => {
	const [ connectedWalletStatus, setConnectedWalletStatus ] = React.useState<
    ConnectedWalletStatus
    >(defaultConnectedWalletStatus);

	const getConnectedWallet = async () => {
		try{
			const addresses = await window.ethereum.request({
				method: 'eth_accounts',
			});

			setConnectedWalletStatus({
				isExternalWalletConnected: addresses.length > 0,
				addresses
			});
		}catch(error) {
			setConnectedWalletStatus(defaultConnectedWalletStatus);
		}
	};

	const addWalletListener = () => {
		window.ethereum.on('accountsChanged', (addresses: Array<string>) => {
			setConnectedWalletStatus({
				isExternalWalletConnected: addresses.length > 0,
				addresses
			});
		  }
		);
	};

	React.useEffect(() => {
		if(!isWalletAvailable()) return;

		getConnectedWallet();
		addWalletListener();
	}, []);

	return connectedWalletStatus;
};