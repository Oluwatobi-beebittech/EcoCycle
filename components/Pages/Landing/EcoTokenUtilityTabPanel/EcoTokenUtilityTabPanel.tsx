import Box  from '@mui/material/Box';

import { DescriptionItem } from './DescriptionItem';

type Props = {
	link: string;
	description: string;
	currentTabPanelIndex: number;
	index: number;
}
export const EcoTokenUtilityTabPanel: React.FC<Props> = (
	{ currentTabPanelIndex, index, link, description }
):JSX.Element => {

	return <Box hidden={currentTabPanelIndex !== index}>
		<DescriptionItem link={link} description ={description}/>
	</Box>;

};