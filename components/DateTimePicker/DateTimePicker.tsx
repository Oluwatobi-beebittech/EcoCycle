import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker as MuiDateTimePicker, DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import * as React from 'react';

type Props = Omit<DateTimePickerProps<dayjs.Dayjs, dayjs.Dayjs>, 'renderInput'>;
export const DateTimePicker: React.FC<Props> = (props) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<MuiDateTimePicker
				{...props}
				renderInput={(inputProps) => <TextField {...inputProps} />}
			/>
		</LocalizationProvider>
	);
};