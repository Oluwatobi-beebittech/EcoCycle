import {  CreditScore } from '@mui/icons-material';
import { Box, FormControl, FormHelperText, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { FormStatusAlert, MenuItems, Select, LoadingButton } from '@Components';
import { EcoPayDto } from '@Dto';
import { useFormSubmit } from '@Hooks';
import { Coins } from '@Utilities';

type EcoPayInputs = EcoPayDto;

export const EcoPay: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm<EcoPayInputs>();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();
	const paymentTypes: MenuItems = [
		{ name: 'None', value:'' },
		{ name: 'Waste recycling', value:'waste_recycling' },
		{ name: 'EcoCredit', value:'ecocredit' },
		{ name: 'EcoProduct', value:'ecoproduct' },
	];
	const coins: MenuItems = [
		{ name: 'None', value: '' },
		{ name: Coins.ECO, value: Coins.ECO },
		{ name: Coins.USDT, value: Coins.USDT },
		{ name: Coins.BUSD, value: Coins.BUSD },
		{ name: Coins.USDC, value: Coins.USDC },
		{ name: Coins.DAI, value: Coins.DAI },
	];

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Typography variant='h3'>EcoPay</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
				<FormControl sx={{ width: '50%', marginX: 'auto', gap: '2rem' }}>
					<FormControl error={Boolean(errors?.paymentType)} required>
						<Select
							labelId="payment-type-label"
							id="payment-type-select"
							label="Payment Type"
							menuItems={paymentTypes}
							defaultValue=''
							errorMessage={errors?.paymentType?.message}
							{...register('paymentType', { required: 'First name is required' })}
						/>
					</FormControl>
					<FormControl error={Boolean(errors?.coin)} required>
						<Select
							labelId="coin-label"
							id="coin-select"
							label="Coin"
							menuItems={coins}
							defaultValue=''
							errorMessage={errors?.coin?.message}
							{...register('coin', { required: 'Coin is required' })}
						/>
					</FormControl>
					<FormControl>
						<TextField
							required
							id="outlined-name"
							label="Amount"
							type='text'
							aria-required="true"
							error={Boolean(errors?.amount)}
							aria-invalid={Boolean(errors?.amount)}
							helperText={errors?.amount?.message}
							{...register('amount', { required: 'First name is required' })}
						/>
						<FormHelperText sx={{ textAlign: 'right', color: 'var(--black-900)' }}>Available: 30 USDT</FormHelperText>
					</FormControl>
					<TextField
						required
						id="outlined-name"
						label="Additional note"
						type='text'
						aria-required="true"
						multiline
						rows={5}
						error={Boolean(errors?.additionalNote)}
						aria-invalid={Boolean(errors?.additionalNote)}
						helperText={errors?.additionalNote?.message}
						{...register('additionalNote', { required: 'Last name is required' })}
					/>
					<LoadingButton
						loading={isLoading}
						disabled={isLoading}
						endIcon={<CreditScore />}
						buttonName="Pay"
						onClick={handleSubmit(async (formData) => {
							update({ isLoading: true });
						})}
					/>
				</FormControl>
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