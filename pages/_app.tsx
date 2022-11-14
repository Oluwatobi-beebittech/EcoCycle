import { ThemeProvider } from '@mui/material/styles';

import { Theme } from '@Styles';

import type { AppProps } from 'next/app';

const  EcoCycleApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return <ThemeProvider theme={Theme}><Component {...pageProps} /></ThemeProvider>;
};

export default EcoCycleApp;