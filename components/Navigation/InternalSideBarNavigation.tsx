import { DashboardOutlined, LocalShippingOutlined, HistoryOutlined, BuildOutlined, Inventory2Outlined, WalletOutlined } from '@mui/icons-material';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import * as React from 'react';

export const InternalSideBarNavigation = () => {
	return <Drawer
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
					<ListItemButton href='/dashboard'>
						<ListItemIcon>
							<DashboardOutlined />
						</ListItemIcon>
						<ListItemText primary='Overview' />
					</ListItemButton>
				</ListItem>
				<Typography variant='caption' sx={{ paddingLeft: '0.5rem' }}> WASTE MANAGEMENT</Typography>
				<ListItem disablePadding>
					<ListItemButton href='/dashboard/schedule'>
						<ListItemIcon>
							<LocalShippingOutlined />
						</ListItemIcon>
						<ListItemText primary='Schedule Pickup' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton href='/dashboard/ecohistory'>
						<ListItemIcon>
							<HistoryOutlined />
						</ListItemIcon>
						<ListItemText primary='EcoHistory' />
					</ListItemButton>
				</ListItem>
				<Typography variant='caption' sx={{ paddingLeft: '0.5rem' }}>COMMERCE</Typography>
				<ListItem disablePadding>
					<ListItemButton href='/dashboard/ecopay'>
						<ListItemIcon>
							<WalletOutlined />
						</ListItemIcon>
						<ListItemText primary='EcoPay' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton href='/dashboard/ecoproducts'>
						<ListItemIcon>
							<Inventory2Outlined />
						</ListItemIcon>
						<ListItemText primary='EcoProducts' />
					</ListItemButton>
				</ListItem>
				<Typography variant='caption' sx={{ paddingLeft: '0.5rem' }}>ADMIN</Typography>
				<ListItem disablePadding>
					<ListItemButton href='/dashboard/settings'>
						<ListItemIcon>
							<BuildOutlined />
						</ListItemIcon>
						<ListItemText primary='Settings' />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	</Drawer>;
};