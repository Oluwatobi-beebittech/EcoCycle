import Container from '@mui/material/Container';
import * as React from 'react';

import { PublicNavigationBar } from '../Navigation';

type Props = {
    children: React.ReactElement;
};
export const PublicLayout: React.FC<Props> = ({ children }): JSX.Element => {

	return <>
		<PublicNavigationBar/>
		<Container fixed>
			{children}
		</Container>
	</>;
};