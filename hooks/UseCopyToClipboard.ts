import * as React from 'react';

type CopyClipboardReturn = {
    isItemCopied: boolean;
    clearIsItemCopied: () => void;
    copyItem: (itemId: string) => void;
};

export const useCopyToClipboard = (): CopyClipboardReturn => {
	const [ isItemCopied, setIsItemCopied ] = React.useState<boolean>(false);

	if(typeof window === undefined) {
		return {
			isItemCopied: false,
			clearIsItemCopied: () => new Error('Call to non-existent function'),
			copyItem: () => new Error('Call to non-existent function')
		};
	}

	const copyItem = (itemId: string) => {
		const inputElement = document.getElementById(itemId) as HTMLInputElement;
		inputElement.select();
		inputElement.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(inputElement.value);
		setIsItemCopied(true);
	};

	const clearIsItemCopied = () => setIsItemCopied(false);

	return { isItemCopied, clearIsItemCopied, copyItem };
};