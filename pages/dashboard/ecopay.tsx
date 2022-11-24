import * as React from 'react';

import { EcoPay as Pay, InternalLayout } from '@Components';

export default function EcoPay() {
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
