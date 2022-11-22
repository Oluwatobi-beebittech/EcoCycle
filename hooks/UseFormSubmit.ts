import * as React from 'react';

type FormSubmit = {
	hasError: boolean;
	hasSuccess: boolean;
	isLoading: boolean;
    successMessage: string;
    errorMessage: string;
};

export type FormSubmitReturnValues = FormSubmit & {
    update: (updateFormSubmit: Partial<FormSubmit>) => void
};

type UseFormSubmit = (
    successMessage?: string, errorMessage?: string
) => FormSubmitReturnValues

export const useFormSubmit: UseFormSubmit = (successMessage='', errorMessage='') => {
	const formSubmitDefaultValues: FormSubmit = {
		hasError: false,
		hasSuccess: false,
		isLoading: false,
		successMessage,
		errorMessage
	};
	const [ formSubmissionStatus, setFormSubmissionStatus ] = React.useState<FormSubmit>(formSubmitDefaultValues);

	const update = (updateFormSubmit: Partial<FormSubmit>) => {
		setFormSubmissionStatus((previousState) => ({
			...previousState,
			...updateFormSubmit
		}));
	};

	const {
		isLoading,
		hasError,
		hasSuccess,
		successMessage: messageSuccess,
		errorMessage: messageError
	} = formSubmissionStatus;

	return { isLoading, hasSuccess, successMessage: messageSuccess, hasError, errorMessage: messageError, update };
};