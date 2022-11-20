import { Info } from '@mui/icons-material';
import Box  from '@mui/material/Box';

import { DescriptionItem } from './DescriptionItem';

export const TabPanel = () => {
	return <Box sx={
		{ width: '100%',
			height: 'content',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
		}
	}>
		<DescriptionItem title="test" description="describe" icon={<Info/>}/>
		<DescriptionItem title="test" description="describe" icon={<Info/>}/>
		<DescriptionItem title="test" description="describe" icon={<Info/>}/>
	</Box>;

};