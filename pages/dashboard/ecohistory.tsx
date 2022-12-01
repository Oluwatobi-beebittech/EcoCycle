import * as React from 'react';

import { EcoHistory as History, InternalLayout } from '@Components';
import { useVerifyAuth } from '@Hooks';
export default function EcoHistory() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <></>;

	return (
		<>
			<History/>
		</>
	);
}

EcoHistory.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayout>
			{page}
		</InternalLayout>
	);
};
