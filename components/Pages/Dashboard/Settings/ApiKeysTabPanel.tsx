import { Edit, DoneAll, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField }  from '@mui/material';
import * as React from 'react';

type Props = {
	currentTabPanelIndex: number;
	index: number;
}
export const ApiKeysTabPanel: React.FC<Props> = ({ currentTabPanelIndex, index }):JSX.Element => {
	const [ editSecretKey, setEditSecretKey ] = React.useState<boolean>(false);
	const [ showSecretKey, setShowSecretKey ] = React.useState<boolean>(false);
	const [ editPublicKey, setEditPublicKey ] = React.useState<boolean>(false);
	const [ showPublicKey, setShowPublicKey ] = React.useState<boolean>(false);

	return (
		<Box hidden={currentTabPanelIndex !== index} sx={{ marginTop: '2rem' }}>
			<Box
				sx={{ display: 'flex', flexDirection: 'column', gap: '2rem',  width: '50%', justifyContent: 'center' }}>
				<TextField
					id="testnet-pk"
					label="Testnet Public Key"
					defaultValue='Ayo'
					type={showPublicKey ? 'text' : 'password'}
					InputProps={{
						readOnly: !editPublicKey,
						endAdornment: <InputAdornment position="end">
							<IconButton
								aria-label="Toggle secret key editor"
								onClick={() => {
									setShowPublicKey(!editPublicKey);
									setEditPublicKey((prevState) => !prevState);
								}}
								onMouseDown={(e) => {
									e.preventDefault();
								}}
								edge="start"
							>
								{editPublicKey ? <DoneAll /> : <Edit />}
							</IconButton>
							<IconButton
								aria-label="Toggle secret key visibility"
								onClick={() => setShowPublicKey((prevState) => !prevState)}
								onMouseDown={(e) => {
									e.preventDefault();
								}}
								edge="end"
							>
								{showPublicKey ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>,
					}}
				/>
				<TextField
					id="testnet-sk"
					label="Testnet Secret Key"
					defaultValue='Ayo'
					type={showSecretKey ? 'text' : 'password'}
					InputProps={{
						readOnly: !editSecretKey,
						endAdornment: <InputAdornment position="end">
							<IconButton
								aria-label="Toggle secret key editor"
								onClick={() => {
									setShowSecretKey(!editSecretKey);
									setEditSecretKey((prevState) => !prevState);
								}}
								onMouseDown={(e) => {
									e.preventDefault();
								}}
								edge="start"
							>
								{editSecretKey ? <DoneAll /> : <Edit />}
							</IconButton>
							<IconButton
								aria-label="Toggle secret key visibility"
								onClick={() => setShowSecretKey((prevState) => !prevState)}
								onMouseDown={(e) => {
									e.preventDefault();
								}}
								edge="end"
							>
								{showSecretKey ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>,
					}}
				/>
			</Box>
		</Box>
	);

};