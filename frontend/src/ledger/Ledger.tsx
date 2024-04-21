import React from 'react';
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
			<div>Date component</div>
			<input type="text" placeholder='Enter transaction type' onKeyUp={handleAutoSuggestion} />
			<input type="number" name="amount" />

			<div>Select box</div>
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
