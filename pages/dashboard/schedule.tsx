import * as React from 'react';

import { SchedulePickup as Pickup, ComingSoon, InternalLayoutWrapper } from '@Components';
import { useVerifyAuth } from '@Hooks';
export default function SchedulePickup() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <></>;

	return (
		<>
			<ComingSoon
				featureName="pickup scheduling"
				shortDescription="With waste pickup scheduling, you can get other collectors to deliver your waste
			to a processor."
			/>
		</>
	);
}

SchedulePickup.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayoutWrapper>
			{page}
		</InternalLayoutWrapper>
	);
};
