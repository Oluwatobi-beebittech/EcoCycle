import * as React from 'react';

import { ComingSoon, InternalLayoutWrapper } from '@Components';
import { useVerifyAuth } from '@Hooks';

export default function EcoProducts() {
	const [ isVerifying ] = useVerifyAuth();
	if(isVerifying) return <></>;

	return (
		<>
			<ComingSoon
				featureName="purchase and sales of eco-friendly products"
				shortDescription="With EcoProduct, you can purchase eco-friendly products from accredited stores. You also get
                some EcoTokens for such purchases too."
			/>
		</>
	);
}

EcoProducts.getLayout = function getLayout(page: React.ReactElement) {
	return (
		<InternalLayoutWrapper>
			{page}
		</InternalLayoutWrapper>
	);
};
