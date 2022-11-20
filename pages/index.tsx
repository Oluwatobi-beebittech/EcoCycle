//import { Typography } from '@mui/material';
//import Head from 'next/head';
//import Image from 'next/image';
import * as React from 'react';

import { PublicLayout, HeroSection, HowItWorks } from '@Components';
export default function Home() {
	return (
		<>
			<HeroSection/>
			<HowItWorks />
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
