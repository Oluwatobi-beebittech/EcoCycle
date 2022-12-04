import { DashboardOutlined, LocalShippingOutlined, HistoryOutlined, BuildOutlined, Inventory2Outlined, WalletOutlined, Logout } from '@mui/icons-material';
import { Badge, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { useRouter, NextRouter } from 'next/router';
import * as React from 'react';

import { removeAccessToken } from '@Utilities';

export const InternalSideBarNavigation = () => {
	const router: NextRouter = useRouter();

	return (
		<Drawer
			variant="permanent"
			sx={{
				width: '15%',
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: '15%', boxSizing: 'border-box' },
			}}
		>
			<Toolbar />
			<Box sx={{ overflow: 'auto', }}>
				<List>
					<ListItem disablePadding>
						<ListItemButton onClick={() => router.push('/dashboard')}>
							<ListItemIcon>
								<DashboardOutlined />
							</ListItemIcon>
							<ListItemText primary='Overview' />
						</ListItemButton>
					</ListItem>
					<Typography variant='caption' sx={{ paddingLeft: '0.5rem' }}> WASTE MANAGEMENT</Typography>
					<ListItem disablePadding>
						<ListItemButton onClick={() => router.push('/dashboard/schedule')}>
							<ListItemIcon>
								<LocalShippingOutlined />
							</ListItemIcon>
							<Badge badgeContent="Pending" color="warning">
								<ListItemText primary='EcoPickup' />
							</Badge>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton onClick={() => router.push('/dashboard/ecohistory')}>
							<ListItemIcon>
								<HistoryOutlined />
							</ListItemIcon>
							<Badge badgeContent="Pending" color="warning">
								<ListItemText primary='EcoHistory' />
							</Badge>
						</ListItemButton>
					</ListItem>
					<Typography variant='caption' sx={{ paddingLeft: '0.5rem' }}>COMMERCE</Typography>
					<ListItem disablePadding>
						<ListItemButton onClick={() => router.push('/dashboard/ecopay')}>
							<ListItemIcon>
								<WalletOutlined />
							</ListItemIcon>
							<ListItemText primary='EcoPay' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton onClick={() => router.push('/dashboard/ecoproducts')}>
							<ListItemIcon>
								<Inventory2Outlined />
							</ListItemIcon>
							<Badge badgeContent="Pending" color="warning">
								<ListItemText primary='EcoProducts' />
							</Badge>
						</ListItemButton>
					</ListItem>
					<Typography variant='caption' sx={{ paddingLeft: '0.5rem' }}>ADMIN</Typography>
					<ListItem disablePadding>
						<ListItemButton onClick={() => router.push('/dashboard/settings')}>
							<ListItemIcon>
								<BuildOutlined />
							</ListItemIcon>
							<ListItemText primary='Settings' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton onClick={() => {
							removeAccessToken();
							router.push('/login');
						}}>
							<ListItemIcon>
								<Logout />
							</ListItemIcon>
							<ListItemText primary='Logout' />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
};