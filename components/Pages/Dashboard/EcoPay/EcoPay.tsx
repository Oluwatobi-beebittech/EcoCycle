import {  CreditScore } from '@mui/icons-material';
import { Alert, AlertTitle, Box, FormControl, FormHelperText, InputAdornment, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { API } from '@API';
import { FormStatusAlert, MenuItems, Select, LoadingButton } from '@Components';
import { EcoPayDto } from '@Dto';
import { useFormSubmit } from '@Hooks';
import { RootState, TokensState } from '@Store';
import { Coins, PaymentTypeReadable, PaymentTypeMapping } from '@Utilities';


type EcoPayInputs = EcoPayDto;

export const EcoPay: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState: { errors }, watch } = useForm<EcoPayInputs>();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();
	const { data: tokensData }: TokensState = useSelector<RootState, TokensState>(rootState => rootState.TokensSlice);
	const selectedToken = watch('coin') as Coins;
	const selectedTokenBalance = tokensData?.[selectedToken]?.tokenBalance as string ?? '__.__';
	const availableBalanceText = `Available: ${selectedTokenBalance} ${selectedToken ?? ''}`;

	const paymentTypes: MenuItems = [
		{ name: 'None', value:'' },
		{ name: PaymentTypeReadable.waste_recycling, value: PaymentTypeMapping.waste_recycling },
		{ name: PaymentTypeReadable.eco_tax_credit, value: PaymentTypeMapping.eco_tax_credit },
		{ name: PaymentTypeReadable.eco_product, value: PaymentTypeMapping.eco_product },
	];

	const paymentTypeCurrentValue = watch('paymentType');
	const isNoneSelected = paymentTypeCurrentValue === '';
	const isWasteRecyclingSelected = paymentTypeCurrentValue === PaymentTypeMapping.waste_recycling;
	const isEcoTaxCreditSelected = paymentTypeCurrentValue === PaymentTypeMapping.eco_tax_credit;
	const isEcoProductSelected = paymentTypeCurrentValue === PaymentTypeMapping.eco_product;

	const shouldRequireBEP20WalletAddress = selectedToken !== Coins.ECO && !isEcoTaxCreditSelected;

	const coins: MenuItems = isEcoTaxCreditSelected
		? [
			{ name: 'None', value: '' },
			{ name: Coins.ECO, value: Coins.ECO },
		]
		: [
			{ name: 'None', value: '' },
			{ name: Coins.ECO, value: Coins.ECO },
			{ name: Coins.USDT, value: Coins.USDT },
			{ name: Coins.BUSD, value: Coins.BUSD },
			{ name: Coins.USDC, value: Coins.USDC },
			{ name: Coins.DAI, value: Coins.DAI },
		];
	const wasteItemTypes: MenuItems = [
		{ name: 'None', value:'' },
		{ name: 'Paper', value:'paper' },
		{ name: 'Cans', value:'can' },
	];
	const productItems: MenuItems = [
		{ name: 'None', value:'' },
		{ name: 'Electronics', value:'electronics' },
		{ name: 'Tree seedling', value:'tree_seedling' },
	];
	const nullItem: MenuItems = [
		{ name: 'None', value:'' },
	];

	let itemNames: MenuItems = nullItem;

	if(isWasteRecyclingSelected) itemNames = wasteItemTypes;

	if(isEcoProductSelected) itemNames = productItems;

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Typography variant='h3'>EcoPay</Typography>
			<Alert severity="info">
				<AlertTitle><b>Lazerpay payment</b></AlertTitle>
				Payments may fail because Lazerpay requires KYC to be completed before withdrawals can occur.
			</Alert>
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
							{...register('paymentType', { required: 'Payment type is required' })}
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
							id="amount"
							label="Amount"
							type='text'
							aria-required="true"
							error={Boolean(errors?.amount)}
							aria-invalid={Boolean(errors?.amount)}
							helperText={errors?.amount?.message}
							{...register('amount', { required: 'Amount is required' })}
						/>
						<FormHelperText sx={{ textAlign: 'right', color: 'var(--black-900)' }}>{availableBalanceText}</FormHelperText>
					</FormControl>
					{
						(isWasteRecyclingSelected || isEcoProductSelected) &&
					<>
						{shouldRequireBEP20WalletAddress && <TextField
							required
							id="receiver-bep20-address"
							label="Receiver's BEP20 wallet address"
							type='text'
							aria-required="true"
							error={Boolean(errors?.receiverBEP20Address)}
							aria-invalid={Boolean(errors?.receiverBEP20Address)}
							helperText={errors?.receiverBEP20Address?.message}
							{...register('receiverBEP20Address', { required: 'Receiver\'s BEP20 wallet address is required' })}
						/>}
						<TextField
							required
							id="receiver-eco-token-address"
							label="Receiver's ECO wallet address"
							type='text'
							aria-required="true"
							error={Boolean(errors?.receiverEcoTokenAddress)}
							aria-invalid={Boolean(errors?.receiverEcoTokenAddress)}
							helperText={errors?.receiverEcoTokenAddress?.message}
							{...register('receiverEcoTokenAddress', { required: 'Receiver\'s EcoToken (ECO) wallet address is required' })}
						/>
						<FormControl error={Boolean(errors?.itemName)} required>
							<Select
								labelId="item-name-label"
								id="item-name-select"
								label="Item Name"
								menuItems={itemNames}
								defaultValue=''
								errorMessage={errors?.itemName?.message}
								{...register('itemName', { required: 'Item name is required' })}
							/>
						</FormControl>
						<TextField
							required
							id="item-weight"
							label="Total Weight"
							type='text'
							aria-required="true"
							error={Boolean(errors?.weight)}
							aria-invalid={Boolean(errors?.weight)}
							helperText={errors?.weight?.message}
							{...register('weight', { required: 'Weight is required' })}
							InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment> }}
						/>
					</>
					 }
					 {
						isEcoProductSelected &&
						<FormControl error={Boolean(errors?.itemName)} required>
							<Select
								labelId="item-quantity-label"
								id="item-quantity-select"
								label="Item quantity"
								menuItems={[
									{ name: 1, value: 1 },
									{ name: 2, value: 2 },
									{ name: 3, value: 3 },
									{ name: 4, value: 4 },
									{ name: 5, value: 5 }
								]}
								defaultValue={1}
								errorMessage={errors?.itemQuantity?.message}
								{...register('itemQuantity', { required: 'Item quantity is required' })}
							/>
						</FormControl>
					 }
					<TextField
						id="additional-note"
						label="Additional note"
						type='text'
						multiline
						rows={5}
						error={Boolean(errors?.additionalNote)}
						aria-invalid={Boolean(errors?.additionalNote)}
						helperText={errors?.additionalNote?.message}
						{...register('additionalNote')}
					/>
					<LoadingButton
						loading={isLoading}
						disabled={isLoading}
						endIcon={<CreditScore />}
						buttonName="Pay"
						onClick={handleSubmit(async (formData) => {
							update({ isLoading: true });
							try{
								const { statusText } = await API.CreateEcoPayPayment(formData);
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
									errorMessage: error?.status ? `${error?.status}: ${error?.statusText} ${error?.data?.message?.[0]}` : 'Unable to make payment'
								});
							}
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