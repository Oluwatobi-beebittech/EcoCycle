import {  Schedule } from '@mui/icons-material';
import { Box, FormControl,  InputAdornment, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { DateTimePicker, FormStatusAlert, MenuItems, Select, LoadingButton } from '@Components';
import { SchedulePickupDto } from '@Dto';
import { useFormSubmit } from '@Hooks';

type SchedulePickupInputs = Omit<SchedulePickupDto, 'pickupDate'>;

export const SchedulePickup: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm<SchedulePickupInputs>();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();
	const [ value, setValue ] = React.useState(dayjs());
	const wasteItemTypes: MenuItems = [
		{ name: 'None', value:'' },
		{ name: 'Paper', value:'paper' },
		{ name: 'Cans', value:'can' },
	];


	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Typography variant='h3'>Schedule Pickup</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
				<FormControl sx={{ width: '50%', marginX: 'auto', gap: '2rem' }}>
					<FormControl error={Boolean(errors?.wasteType)} required>
						<Select
							labelId="waste-type-label"
							id="waste-type-select"
							value=''
							label="Waste Type"
							menuItems={wasteItemTypes}
							errorMessage={errors?.wasteType?.message}
							{...register('wasteType', { required: 'First name is required' })}
						/>
					</FormControl>
					<DateTimePicker label="Pickup date"
						inputFormat='DD MMMM[,] YYYY hh:mm A'
						value={value}
						onChange={(newValue) => {
							setValue(newValue as dayjs.Dayjs);
						}}/>
					<TextField
						required
						id="outlined-name"
						label="Weight"
						type='text'
						aria-required="true"
						error={Boolean(errors?.weight)}
						aria-invalid={Boolean(errors?.weight)}
						helperText={errors?.weight?.message}
						{...register('weight', { required: 'Weight is required' })}
						InputProps={{ endAdornment: <InputAdornment position='end'>kg</InputAdornment> }}
					/>
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
						{...register('additionalNote', { required: 'Additional note is required' })}
					/>
					<LoadingButton
						loading={isLoading}
						disabled={isLoading}
						endIcon={<Schedule/>}
						buttonName="Schedule"
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