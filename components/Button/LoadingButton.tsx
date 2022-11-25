import { LoadingButton as MuiLoadingButton, LoadingButtonProps } from '@mui/lab';

type Props = Omit<LoadingButtonProps, 'loadingPosition' | 'variant' | 'size' | 'sx'> & {
    buttonName: string,
};
export const LoadingButton: React.FC<Props> = ({ buttonName, ...rest }) => {
	return (
		<MuiLoadingButton
			loadingPosition="end"
			variant='contained'
			size="small"
			sx={{ width: 'content', marginX: 'auto' }}
			{...rest}
		>
			{buttonName}
		</MuiLoadingButton>
	);
};