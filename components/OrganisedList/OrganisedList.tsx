import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, List,ListItem, ListItemAvatar, ListItemText, ListSubheader } from '@mui/material';
import NextImage, { StaticImageData } from 'next/image';
import * as React from 'react';

export type OrganisedListItems = {
    image: StaticImageData;
    name: string;
    description: string;
};
type Props = {
    listTitle: string;
    listItems: Array<OrganisedListItems>;
};
export const OrganisedList: React.FC<Props> = ({ listTitle, listItems }): JSX.Element => {
	return (
		<List
			sx={{ width: '100%', maxWidth: 360, bgcolor: 'var(--gray-200)' }}
			subheader={
				<ListSubheader
					sx={{ bgcolor: 'inherit', fontWeight: 'bold', color: 'var(--gray-300)' }}
				>
					{listTitle}
				</ListSubheader>}
		>
			{
				listItems.map(({ image, name, description }) =>
					<ListItem key={name}>
						<ListItemAvatar>
							<Avatar>
								<NextImage
									src={image}
									alt={name}
								/>
							</Avatar>
						</ListItemAvatar>
						<ListItemText primaryTypographyProps={{ sx: { fontWeight: 'bold' } }} primary={name} secondary={description} />
					</ListItem>
				)
			}
		</List>
	);
};