import * as React from 'react';

import { BecomeEcoChampion, PublicLayout, HeroSection, HowItWorks, GetRewards, EcoTokenUtility } from '@Components';
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
