import { AppBar, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
import * as React from 'react';

import { Button } from '@Components';

import { MuiLink } from '../Link';

type Props = {
    children: React.ReactElement;
};
const ElevationScroll: React.FC<Props> = ({ children }): JSX.Element => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
};

export const PublicNavigationBar: React.FC = (): JSX.Element => {

	return <ElevationScroll>
		<AppBar>
			<Container fixed>
				<Toolbar>
					<Typography variant="h2">
                        EcoCycle
					</Typography>
					<Toolbar sx={{ width:'100%', justifyContent: 'flex-end', }} className='nav-links'>
						<MuiLink className="nav-links__link" component='button'>
							<Link href="/">How it works</Link>
						</MuiLink>
						<MuiLink className="nav-links__link">
							<Link href="/">Login</Link>
						</MuiLink>
						<Link href="/">
							<Button className="nav-links__link" variant="contained" size="small">SignUp</Button>
						</Link>
					</Toolbar>
				</Toolbar>
			</Container>
		</AppBar>
	</ElevationScroll>;

};