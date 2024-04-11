import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateComponent: React.FC = () => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<div className="date-picker">
			<DatePicker
				selected={selectedDate}
				onChange={handleDateChange}
				placeholderText="Select a date"
				dateFormat="dd-MM-yyyy"
			/>
		</div>
	);
};

export default DateComponent;
