import Box  from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { DescriptionItem } from './DescriptionItem';
import { TabContentArray } from './HowitWorksTabContent';


type Props = {
	currentTabPanelIndex: number;
	index: number;
	tabContent: TabContentArray;
}
export const HowitWorksTabPanel: React.FC<Props> = ({ currentTabPanelIndex, index, tabContent }):JSX.Element => {

	return <Box hidden={currentTabPanelIndex !== index}>
		<Grid container spacing={12} sx={{
			marginTop: '1rem',
			marginLeft: 0,
		}}>
			{tabContent.map(content =>
				<Grid item md={3} key ={content.id} sx={{
					paddingTop: '0',
				}}>
					<DescriptionItem title={content.title} description={content.description} icon={content.icon}/>
				</Grid>
			)}
		</Grid>
	</Box>;

};