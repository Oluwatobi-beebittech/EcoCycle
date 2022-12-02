import { Skeleton } from '@mui/material';
import * as React from 'react';

import { BalanceCard, CoinsOrganisedList, InternalLayoutWrapper } from '@Components';
import { useVerifyAuth } from '@Hooks';
export default function Dashboard() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <Skeleton />;

	return (
		<>
			<CoinsOrganisedList/>
			<BalanceCard />
		</>
	);
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayoutWrapper>
			{page}
		</InternalLayoutWrapper>
	);
};
