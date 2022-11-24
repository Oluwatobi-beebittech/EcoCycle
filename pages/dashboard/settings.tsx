import * as React from 'react';

import { Settings as Set, InternalLayout } from '@Components';

export default function Settings() {
	return (
		<>
			<Set/>
		</>
	);
}

Settings.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayout>
			{page}
		</InternalLayout>
	);
};
