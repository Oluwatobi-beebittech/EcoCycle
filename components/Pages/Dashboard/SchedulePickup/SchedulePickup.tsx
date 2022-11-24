import { ArrowForward, Schedule } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { API } from '@API';
import { DateTimePicker,FormStatusAlert } from '@Components';
import { CreateUserDto } from '@Dto';
import { useFormSubmit } from '@Hooks';

type SignUpInputs = CreateUserDto & {
    confirmPassword: string;
};

export const SchedulePickup: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm<SignUpInputs>();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();


	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<Typography variant='h3'>Schedule Pickup</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
				<FormControl sx={{ width: '50%', marginX: 'auto', gap: '2rem' }}>
					<FormControl error required>
						<InputLabel id="demo-simple-select-error-label">Waste Type</InputLabel>
						<Select
							labelId="demo-simple-select-error-label"
							id="demo-simple-select-error"
							value='10'
							label="Waste Type"
							onChange={() => console.log('jj')}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value='paper'>Paper</MenuItem>
							<MenuItem value='cans'>Cans</MenuItem>
						</Select>
						<FormHelperText>Error</FormHelperText>
					</FormControl>
					<DateTimePicker/>
					<TextField
						required
						id="outlined-name"
						label="Weight"
						type='text'
						aria-required="true"
						error={Boolean(errors?.firstName)}
						aria-invalid={Boolean(errors?.firstName)}
						helperText={errors?.firstName?.message}
						{...register('firstName', { required: 'First name is required' })}
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
						error={Boolean(errors?.lastName)}
						aria-invalid={Boolean(errors?.lastName)}
						helperText={errors?.lastName?.message}
						{...register('lastName', { required: 'Last name is required' })}
					/>
					<LoadingButton
						loading={isLoading}
						loadingPosition="end"
						disabled={isLoading}
						endIcon={<Schedule/>}
						variant='contained'
						size="small"
						sx={{ width: 'content', marginX: 'auto' }}
						onClick={handleSubmit(async (formData) => {
							update({ isLoading: true });
                            // eslint-disable-next-line no-unused-vars
							const { confirmPassword, ...data } = formData;
							let newuserInfo;
							try{
								newuserInfo = await API.CreateNewUser(data);
							}catch(error: any) {
								update({
									isLoading: false,
									hasError: true,
									errorMessage: `${error?.status}: ${error?.statusText} ${error?.data?.message?.[0]}` ?? 'Error encountered while saving your details. Kindly try again.'
								});
								return;
							}

							update({ isLoading: false, hasError: false, hasSuccess: true, successMessage: 'Registration successful' });
							return newuserInfo;
						})}
					>
                    Schedule
					</LoadingButton>
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