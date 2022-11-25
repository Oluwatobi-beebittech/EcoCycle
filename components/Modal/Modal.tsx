import { Close } from '@mui/icons-material';
import { Dialog, DialogTitle , DialogContent, IconButton } from '@mui/material';
import * as React from 'react';

type Props = {
	children: React.ReactElement;
	isOpen: boolean;
	title: string;
	onClose?: () => void | undefined;
}
export const Modal: React.FC<Props> = ({ isOpen, onClose, children, title }): JSX.Element => {
	return <Dialog open={isOpen} fullWidth={true} onClose={onClose}>
		<DialogTitle sx={{ m: 0, p: 2 }}>
			{title}
			{onClose &&
        <IconButton
        	aria-label="close"
        	onClick={onClose}
        	sx={{
        		position: 'absolute',
        		right: 8,
        		top: 8,
        		color: 'var(--black-900)',
        	}}
        >
        	<Close />
        </IconButton>
			}
		</DialogTitle>
		<DialogContent dividers>
			{children}
		</DialogContent>
	</Dialog>;

};