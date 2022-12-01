import * as React from 'react';

import { SchedulePickup as Pickup, InternalLayout } from '@Components';
import { useVerifyAuth } from '@Hooks';
export default function SchedulePickup() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <></>;

	return (
		<>
			<Pickup/>
		</>
	);
}

SchedulePickup.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayout>
			{page}
		</InternalLayout>
	);
};
