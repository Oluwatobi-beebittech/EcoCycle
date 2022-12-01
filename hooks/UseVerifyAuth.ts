import { useRouter, NextRouter } from 'next/router';
import * as React from 'react';

import { API } from '@API';

export const useVerifyAuth = () => {
	const router: NextRouter = useRouter();
	const [ isVerifying, setIsVerifying ] = React.useState(true);

	const verify = async () => {
		try{
			await API.VerifyAuth();
			setIsVerifying(false);
		}catch(error) {
			router.push('/login');
		}
	};

	React.useEffect(() => {
		verify();
	}, []);

	return [ isVerifying ];
};