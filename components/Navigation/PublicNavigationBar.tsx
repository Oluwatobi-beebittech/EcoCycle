import { AppBar, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
import { useRouter, NextRouter } from 'next/router';
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
	const router: NextRouter = useRouter();

	return <ElevationScroll>
		<AppBar>
			<Container fixed>
				<Toolbar>
					<Link href='/' className="nav-header__title">
						<Typography variant="h2">

                        EcoCycle

						</Typography>
					</Link>
					<Toolbar sx={{ width:'100%', justifyContent: 'flex-end', }} className='nav-links'>
						<MuiLink className="nav-links__link" component='button' onClick={() => router.push('/#how-it-works')}>
							How it works
						</MuiLink>
						<MuiLink className="nav-links__link" component='button' onClick={() => router.push('/login')}>
							Login
						</MuiLink>
						<Button className="nav-links__link" variant="contained" size="small" onClick={() => router.push('/signup')}>SignUp</Button>
					</Toolbar>
				</Toolbar>
			</Container>
		</AppBar>
	</ElevationScroll>;

};