import { AccountCircle, NotificationsNone } from '@mui/icons-material';
import { AppBar, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
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

export const InternalTopNavigationBar: React.FC = (): JSX.Element => {

	return <ElevationScroll>
		<AppBar sx={{ zIndex: '5000' }}>
			<Container fixed>
				<Toolbar>
					<Typography variant="h2">
                        EcoCycle
					</Typography>
					<Toolbar sx={{ width:'100%', justifyContent: 'flex-end', }} className='nav-links'>
						<MuiLink className="nav-links__link--desktop">
							<Link href="/#how-it-works">
								<Badge badgeContent={4} color="primary">
									<NotificationsNone color="action" />
								</Badge>
							</Link>
						</MuiLink>
						<MuiLink className="nav-links__link--desktop">
							<Button size="small" startIcon={<AccountCircle color="action" fontSize='large'/>} sx={{ textTransform: 'none' }}>
								Account
							</Button>
						</MuiLink>
					</Toolbar>
				</Toolbar>
			</Container>
		</AppBar>
	</ElevationScroll>;

};