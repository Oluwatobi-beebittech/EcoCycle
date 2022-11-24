import * as React from 'react';

import { BecomeEcoChampion, PublicLayout, HeroSection, HowItWorks, GetRewards, EcoTokenUtility } from '@Components';
declare global {
    interface Window { ethereum: any; }
}

export default function Home() {
	return (
		<>
			<HeroSection/>
			<HowItWorks />
			<GetRewards />
			<EcoTokenUtility />
			<BecomeEcoChampion />
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
