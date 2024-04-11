import React from 'react';
import Select, { StylesConfig } from 'react-select';

interface Option {
	value: string;
	label: string;
}

interface Group {
	label: string;
	options: Option[];
}

interface Props {
	options: Group[];
}

const SelectComponent: React.FC<Props> = ({ options }) => {
	const customStyles: StylesConfig = {
		control: (provided) => ({
			...provided,
			width: '100%',
			padding: '10px',
			border: '1px solid #ccc',
			borderRadius: '5px',
			fontSize: '16px',
			backgroundColor: '#fff',
		}),
		option: (provided) => ({
			...provided,
			padding: '10px',
			fontSize: '16px',
		}),
		groupHeading: (provided) => ({
			...provided,
			fontWeight: 'bold',
		}),
	};

	return (
		<Select
			options={options}
			styles={customStyles}
			placeholder="Select an option"
			isSearchable={true}
		/>
	);
};

export default SelectComponent;
