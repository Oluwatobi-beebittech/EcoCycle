import { isWalletAvailable , connectionFailed, connectionSuccess } from '../ExternalWalletConnection';

export const sendPayment = async () => {
	if(!isWalletAvailable()) return connectionFailed;

	const transactionParameters = {
		nonce: '0x00', // ignored by MetaMask
		gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
		gas: '0x2710', // customizable by user during MetaMask confirmation.
		to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
		from: window.ethereum.selectedAddress, // must match user's active address.
		value: '0x00', // Only required to send ether to the recipient from the initiating external account.
		data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
		chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
	};

	// txHash is a hex string
	// As with any RPC call, it may throw an error
	const txHash = await window.ethereum.request({
		method: 'eth_sendTransaction',
		params: [ transactionParameters ],
	});


};