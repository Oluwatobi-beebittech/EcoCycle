import * as React from 'react';

export const useSetTabIndex = (
	currentTabIndex: number,
	setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>,
	minimumTabIndex: number,
	maximumTabIndex: number,
) => {
	React.useEffect(() => {
		if(global?.window) {
			const searchString = window.location.search;
			const tabIndex = Boolean(searchString)
				? Number(new URLSearchParams(searchString).get('tabIndex'))
				: currentTabIndex;
			setCurrentTabIndex((prevIndex) => {
				return tabIndex >=minimumTabIndex && tabIndex <= maximumTabIndex ? tabIndex : prevIndex;
			});
		}
	}, []);
};