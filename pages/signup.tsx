import * as React from 'react';

import { PublicLayout, SignUp as AppSignUp } from '@Components';

export default function SignUp() {
	return (
		<AppSignUp/>
	);
}

SignUp.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<PublicLayout>
			{page}
		</PublicLayout>
	);
};
