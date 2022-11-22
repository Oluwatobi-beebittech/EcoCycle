import { Alert, Snackbar } from '@mui/material';
import * as React from 'react';

import type { FormSubmitReturnValues } from '@Hooks';

type Props = Omit<FormSubmitReturnValues, 'isLoading'>;
export const FormStatusAlert: React.FC<Props> = (
	{ hasError, update, errorMessage, hasSuccess, successMessage }
): JSX.Element => {
	return (
		<>
			<Snackbar
				open={hasError}
				autoHideDuration={6000}
				onClose={() => update({ hasError: false, hasSuccess: false })}
			>
				<Alert
					onClose={() => update({ hasError: false, hasSuccess: false })}
					severity="error"
					sx={{ width: '100%' }}
				>
					{`${errorMessage}`}
				</Alert>
			</Snackbar>
			<Snackbar
				open={hasSuccess}
				autoHideDuration={6000}
				onClose={() => update({ hasError: false, hasSuccess: false })}
			>
				<Alert
					onClose={() => update({ hasError: false, hasSuccess: false })}
					severity="success"
					sx={{ width: '100%' }}
				>
					{`${successMessage}`}
				</Alert>
			</Snackbar>
		</>
	);
};