import * as React from 'react';

import { Settings as Set, InternalLayoutWrapper } from '@Components';
import { useVerifyAuth } from '@Hooks';
export default function Settings() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <></>;

	return (
		<>
			<Set/>
		</>
	);
}

Settings.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayoutWrapper>
			{page}
		</InternalLayoutWrapper>
	);
};
