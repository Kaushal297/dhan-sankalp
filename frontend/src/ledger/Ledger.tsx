import React from 'react';
import DateComponent from '../components/common/DateComponent';
import { transactionLinkOptions } from '../assets/dummyData/utils';
import SelectComponent from '../components/common/SelectComponent';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import BadgeComponent from '@/components/common/BadgeComponent';

interface Props {

}

const handleAutoSuggestion = () => {
	console.log('it works');
}

const handleAddTransaction = () => {
	console.log('add transaction clicked');
}

const Ledger: React.FC<Props> = () => {
	return (
		<div className='lc-content'>
			<DateComponent />
			<input type="text" placeholder='Enter transaction type' onKeyUp={handleAutoSuggestion} />
			<input type="number" name="amount" />
			<SelectComponent 
				options={transactionLinkOptions}
			/>
			<Textarea placeholder='Notes' />

			<div>
				<div>Tags</div>
				<BadgeComponent />
			</div>
			<Button onClick={handleAddTransaction}>Add Transaction</Button>
		</div>
	);
}

export default Ledger;
