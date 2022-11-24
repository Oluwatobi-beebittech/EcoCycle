import * as React from 'react';

import { EcoHistory as History, InternalLayout } from '@Components';

export default function EcoHistory() {
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
