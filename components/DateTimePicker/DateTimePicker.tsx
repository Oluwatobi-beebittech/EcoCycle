import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import * as React from 'react';

export const DateTimePicker = () => {
	const [ value, setValue ] = React.useState(dayjs('2022-04-07'));

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<MuiDateTimePicker
				renderInput={(props) => <TextField {...props} />}
				label="DateTimePicker"
				value={value}
				onChange={(newValue) => {
					setValue(newValue as dayjs.Dayjs);
				}}
			/>
		</LocalizationProvider>
	);
};