import * as React from 'react';

import { EcoPay as Pay, InternalLayout } from '@Components';
import { useVerifyAuth } from '@Hooks';
export default function EcoPay() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <></>;

	return (
		<>
			<Pay/>
		</>
	);
}

EcoPay.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayout>
			{page}
		</InternalLayout>
	);
};
