import * as React from 'react';

import { SchedulePickup as Pickup, InternalLayout } from '@Components';

export default function SchedulePickup() {
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
