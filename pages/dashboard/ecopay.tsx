import * as React from 'react';

import { EcoPay as Pay, InternalLayoutWrapper } from '@Components';
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
		<InternalLayoutWrapper>
			{page}
		</InternalLayoutWrapper>
	);
};
