import { Dialog, DialogContent, CircularProgress } from '@mui/material';
import * as React from 'react';

type Props = {
    isOpen: boolean;
}
export const LoadingPopup: React.FC<Props> = ({ isOpen }): JSX.Element => {
	return (
		<Dialog open={isOpen} sx={{ zIndex: 9_9999 }}>
			<DialogContent>
				<CircularProgress />
			</DialogContent>
		</Dialog>
	);
};