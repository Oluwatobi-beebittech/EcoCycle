import { NotificationsNone } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Container, Toolbar,  Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
import * as React from 'react';

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
						<MuiLink className="nav-links__link--desktop" component='button'>
							<Link href="/#how-it-works">
								<Badge badgeContent={4} color="primary">
									<NotificationsNone color="action" />
								</Badge>
							</Link>
						</MuiLink>
						<MuiLink className="nav-links__link--desktop" component='button'>
							<Link href="/dashboard/settings">
								<Avatar>J</Avatar>
							</Link>
						</MuiLink>
					</Toolbar>
				</Toolbar>
			</Container>
		</AppBar>
	</ElevationScroll>;

};