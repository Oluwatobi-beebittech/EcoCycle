import { Box, TextField }  from '@mui/material';
import * as React from 'react';

type Props = {
	currentTabPanelIndex: number;
	index: number;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}
export const ProfileTabPanel: React.FC<Props> = (
	{ currentTabPanelIndex, index, firstName, lastName, email, phoneNumber }
):JSX.Element => {

	return (
		<Box hidden={currentTabPanelIndex !== index} sx={{ marginTop: '2rem' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem',  width: '50%', justifyContent: 'center' }}>
				<TextField
					id="first-name"
					label="First name"
					defaultValue={firstName}
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id="last-name"
					label="Last name"
					defaultValue={lastName}
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id="email"
					label="Email"
					defaultValue={email}
					InputProps={{
						readOnly: true,
					}}
				/>
				<TextField
					id="phone-number"
					label="Phone number"
					defaultValue={phoneNumber}
					InputProps={{
						readOnly: true,
					}}
				/>
			</Box>
		</Box>
	);

};