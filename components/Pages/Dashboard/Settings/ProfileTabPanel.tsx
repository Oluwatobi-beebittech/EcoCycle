import { Box, TextField }  from '@mui/material';
import * as React from 'react';

type Props = {
	currentTabPanelIndex: number;
	index: number;
}
export const ProfileTabPanel: React.FC<Props> = ({ currentTabPanelIndex, index }):JSX.Element => {

	return (
		<Box hidden={currentTabPanelIndex !== index} sx={{ marginTop: '2rem' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem',  width: '50%', justifyContent: 'center' }}>
				<TextField
					id="first-name"
					label="First name"
					defaultValue='Ayo'
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id="last-name"
					label="Last name"
					defaultValue='Ayoade'
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id="email"
					label="Email"
					defaultValue='ayoade@gmail.com'
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id="phone-number"
					label="Phone number"
					defaultValue='+2349898765463'
					InputProps={{
						readOnly: true,
					}}
				/>
			</Box>
		</Box>
	);

};