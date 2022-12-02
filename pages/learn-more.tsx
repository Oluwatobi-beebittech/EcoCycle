import * as React from 'react';

import { LearnMore, PublicLayout } from '@Components';

export default function Home() {
	return (
		<>
			<LearnMore/>
		</>
	);
}

Home.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<PublicLayout>
			{page}
		</PublicLayout>
	);
};
