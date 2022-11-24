import * as React from 'react';

import { Login as AppLogin, InternalLayout, BalanceCard, CoinsOrganisedList } from '@Components';

export default function Dashboard() {
	return (
		<>
			<CoinsOrganisedList/>
			<BalanceCard />
		</>
	);
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayout>
			{page}
		</InternalLayout>
	);
};
