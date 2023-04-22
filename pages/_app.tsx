import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import { Theme } from '@Styles';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import '../styles/main.scss';

export type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<Props, InitialProps> & {
	getLayout?: (page: React.ReactElement) => React.ReactNode
  }

  type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
  }

const  EcoCycleApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
	const getLayout = Component.getLayout ?? ((page) => page);

	return <ThemeProvider theme={Theme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>;
};

export default EcoCycleApp;