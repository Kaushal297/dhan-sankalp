import React, { useMemo } from 'react';

interface Props {
	numbers: number[];
}

const AddNumbers: React.FC<Props> = ({ numbers }) => {
	const sum = useMemo(() => numbers.reduce((acc, curr) => acc + curr, 0), [numbers]);

	return (
		<>{sum}</>
	);
}

export default AddNumbers;
