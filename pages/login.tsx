import * as React from 'react';

import { Login as AppLogin, PublicLayout } from '@Components';

export default function Login() {
	return (
		<>
			<AppLogin/>
		</>
	);
}

Login.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<PublicLayout>
			{page}
		</PublicLayout>
	);
};
