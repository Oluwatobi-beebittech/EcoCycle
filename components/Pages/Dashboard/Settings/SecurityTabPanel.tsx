import { LockReset } from '@mui/icons-material';
import { Box, FormControl }  from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { LoadingButton, PasswordInput } from '@Components';
import { ResetPasswordDto } from '@Dto';
import { useFormSubmit } from '@Hooks';

type Props = {
	currentTabPanelIndex: number;
	index: number;
}
export const SecurityTabPanel: React.FC<Props> = ({ currentTabPanelIndex, index }):JSX.Element => {
	const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordDto>();
	const { isLoading, hasSuccess, successMessage, hasError, errorMessage, update } = useFormSubmit();

	return (
		<Box hidden={currentTabPanelIndex !== index} sx={{ marginTop: '2rem' }}>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem',  width: '50%', justifyContent: 'center' }}>
				<FormControl sx={{ gap: '2rem' }}>
					<PasswordInput
						required
						id="old-password"
						label="Old password"
						aria-required="true"
						error={Boolean(errors?.oldPassword)}
						aria-invalid={Boolean(errors?.oldPassword)}
						helperText={errors?.oldPassword?.message}
						{...register('oldPassword', { required: 'Old password is required' })}
					/>
					<PasswordInput
						required
						id="new-password"
						label="New password"
						aria-required="true"
						error={Boolean(errors?.newPassword)}
						aria-invalid={Boolean(errors?.newPassword)}
						helperText={errors?.newPassword?.message}
						{...register('newPassword', { required: 'New password is required' })}
					/>
					<PasswordInput
						required
						id="confirm-new-password"
						label="Confirm new password"
						aria-required="true"
						error={Boolean(errors?.confirmNewPassword)}
						aria-invalid={Boolean(errors?.confirmNewPassword)}
						helperText={errors?.confirmNewPassword?.message}
						{...register('confirmNewPassword', { required: 'Confirm new password is required' })}
					/>
					<LoadingButton
						loading={isLoading}
						disabled={isLoading}
						endIcon={<LockReset/>}
						buttonName="Schedule"
						onClick={handleSubmit(async (formData) => {
							update({ isLoading: true });
						})}
					/>
				</FormControl>
			</Box>
		</Box>
	);

};