import * as React from 'react';

import { Login as AppLogin, InternalLayout } from '@Components';

export default function Dashboard() {
	return (
		<AppLogin/>
	);
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayout>
			{page}
		</InternalLayout>
	);
};
