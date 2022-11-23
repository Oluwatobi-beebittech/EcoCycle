import { Inbox, Mail } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
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
				{[ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map((text, index) =>
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <Inbox /> : <Mail />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				)}
			</List>
			<Divider />
			<List>
				{[ 'All mail', 'Trash', 'Spam' ].map((text, index) =>
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <Inbox /> : <Mail />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				)}
			</List>
		</Box>
	</Drawer>;
};