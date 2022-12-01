import * as React from 'react';

import { InternalLayout, BalanceCard, CoinsOrganisedList } from '@Components';
import { useVerifyAuth } from '@Hooks';
export default function Dashboard() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <></>;

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
