import Box  from '@mui/material/Box';


type Props = {
	currentTabPanelIndex: number;
	index: number;
}
export const EcoTokenUtilityTabPanel: React.FC<Props> = ({ currentTabPanelIndex, index }):JSX.Element => {

	return <Box hidden={currentTabPanelIndex !== index}>
		ccccc
	</Box>;

};