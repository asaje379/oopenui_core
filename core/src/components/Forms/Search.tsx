import React, { ReactElement, useMemo } from 'react';
import Input from './Input';

interface Props {
	label?: string;
	dataList?: Array<any>;
	onSearch?: Function;
}

export default function Search({ label = 'Rechercher', dataList = [], onSearch = (v: []) => v }: Props): ReactElement {
	const transformedList = useMemo(() => dataList.map((it) => Object.values(it).join('').toLowerCase()), [ dataList ]);

	const handleChange = (e: any) => {
		const value = e.target.value.toLowerCase();
		const res = [];
		for (let i = 0; i < dataList.length; i++) {
			if (transformedList[i].indexOf(value) !== -1) {
				res.push(dataList[i]);
			}
		}
		onSearch(res);
	};

	return (
		<Input
			placeholder={label}
			inputIcon="search"
			padding="10px 3px"
			inputIconPosition="left"
			onChange={handleChange}
		/>
	);
}
