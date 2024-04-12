import React, { useContext } from 'react';
import Select, { StylesConfig } from 'react-select';
import { ThemeProviderContext } from '../ThemeProvider';

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
	const { theme } = useContext(ThemeProviderContext);

	const customStyles: StylesConfig<Option, false, Group> = {
		control: (provided) => ({
			...provided,
			width: '100%',
			padding: '10px',
			border: '1px solid #ccc',
			borderRadius: '5px',
			fontSize: '16px',
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

	const color = theme === 'dark' ? '#fff' : '#000'

	return (
		<Select
			options={options}
			styles={customStyles}
			placeholder="Select an option"
			isSearchable={true}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					primary: color,
				},
			})}
		/>
	);
};

export default SelectComponent;
