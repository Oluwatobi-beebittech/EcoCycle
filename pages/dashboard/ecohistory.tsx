import * as React from 'react';

import { EcoHistory as History, ComingSoon, InternalLayoutWrapper } from '@Components';
import { useVerifyAuth } from '@Hooks';
export default function EcoHistory() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <></>;

	return (
		<>
			<ComingSoon
				featureName="transaction history view"
				shortDescription="With transaction history, you can view previous transactions and sort them by types."
			/>
		</>
	);
}

EcoHistory.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayoutWrapper>
			{page}
		</InternalLayoutWrapper>
	);
};
