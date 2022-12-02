import * as React from 'react';
import { Provider as ReduxToolkitProvider } from 'react-redux';

import { Store } from '@Store';

import { InternalLayout } from './InternalLayout';

type Props = {
    children: React.ReactElement;
}
export const InternalLayoutWrapper: React.FC<Props> = ({ children }): JSX.Element => {
	return (
		<ReduxToolkitProvider store={Store}>
			<InternalLayout>
				{children}
			</InternalLayout>
		</ReduxToolkitProvider>
	);

};