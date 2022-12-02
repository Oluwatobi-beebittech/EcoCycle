import { Edit, DoneAll, Visibility, VisibilityOff ,Lock } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField }  from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { API } from '@API';
import { FormStatusAlert, LoadingButton } from '@Components';
import { LazerPayApiKeyDto } from '@Dto';
import { useFormSubmit } from '@Hooks';

type LazerPayApiKeyInputs = LazerPayApiKeyDto;

type Props = {
	currentTabPanelIndex: number;
	index: number;
	publicKey?: string | undefined;
	secretKey?: string | undefined;
}
export const ApiKeysTabPanel: React.FC<Props> = (
	{ currentTabPanelIndex, index, publicKey, secretKey }
):JSX.Element => {
	const [ editSecretKey, setEditSecretKey ] = React.useState<boolean>(false);
	const [ showSecretKey, setShowSecretKey ] = React.useState<boolean>(false);
	const [ editPublicKey, setEditPublicKey ] = React.useState<boolean>(false);
	const [ showPublicKey, setShowPublicKey ] = React.useState<boolean>(false);
	const { register, handleSubmit, formState: { errors }, watch } = useForm<LazerPayApiKeyInputs>();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();

	const lazerApiKeyCall = !publicKey || !secretKey ? API.CreateLazerPayApiKey : API.UpdateLazerPayApiKey;

	return (
		<Box hidden={currentTabPanelIndex !== index} sx={{ marginTop: '2rem' }}>
			<Box
				sx={{ display: 'flex', flexDirection: 'column', gap: '2rem',  width: '50%', justifyContent: 'center' }}>
				<TextField
					id="testnet-sk"
					label="Testnet Secret Key"
					defaultValue={secretKey ?? ''}
					type={showSecretKey ? 'text' : 'password'}
					aria-required="true"
					error={Boolean(errors?.secretKey)}
					aria-invalid={Boolean(errors?.secretKey)}
					helperText={errors?.secretKey?.message}
					{...register('secretKey', { required: 'Testnet secret key is required' })}
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
				<TextField
					id="testnet-pk"
					label="Testnet Public Key"
					defaultValue={publicKey ?? ''}
					type={showPublicKey ? 'text' : 'password'}
					aria-required="true"
					error={Boolean(errors?.publicKey)}
					aria-invalid={Boolean(errors?.publicKey)}
					helperText={errors?.publicKey?.message}
					{...register('publicKey', { required: 'Testnet public key is required' })}
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
				<LoadingButton
					loading={isLoading}
					disabled={isLoading}
					endIcon={<Lock />}
					buttonName="Save"
					onClick={handleSubmit(async (formData) => {
						update({ isLoading: true });
						try{
							const { statusText } = await lazerApiKeyCall(formData);
							update({
								isLoading: false,
								hasError: false,
								hasSuccess: true,
								successMessage: statusText
							});
						}catch(error: any) {
							update({
								isLoading: false,
								hasError: true,
								errorMessage: error?.status ? `${error?.status}: ${error?.statusText} ${error?.data?.message?.[0]}` : 'Unable to login. Check the email and password again'
							});
						}
					})}
				/>
			</Box>
			<FormStatusAlert
				hasError={hasError}
				hasSuccess={hasSuccess}
				successMessage={successMessage}
				errorMessage={errorMessage}
				update={update}
			/>
		</Box>
	);

};