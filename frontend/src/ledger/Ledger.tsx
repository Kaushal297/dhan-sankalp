import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import BadgeComponent from '@/components/common/BadgeComponent';
import { Input } from "@/components/ui/input"
import { DatePickerDemo } from '@/components/common/DatePicker';
import { DataTable} from '@/components/common/reactTable';
import { ArrowUpDown } from "lucide-react"
import {
	ColumnDef
} from "@tanstack/react-table"

interface Props {}

interface Record {
	date: Date | null,
	transaction_name: string,
	amount: number,
}

const handleAutoSuggestion = () => {
	console.log('it works');
}

const columns: ColumnDef<Record>[] = [
	{
		accessorKey: "date",
		header: () => <div>Date</div>,

	},
	{
		accessorKey: "transaction_name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Transaction
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			)
		},
	},
	{
		accessorKey: "amount",
		header: () => <div className="text-right">Amount</div>,
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("amount"))
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(amount)

			return <div className="text-right font-medium">{formatted}</div>
		}
	},
]

const Ledger: React.FC<Props> = () => {
	const [records, setRecords] = useState<Record[]>([]);
	const transactionRef = useRef<HTMLInputElement>(null);
	const amountRef = useRef<HTMLInputElement>(null);
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
	
	const handleAddTransaction = () => {
		const date = transactionRef.current?.valueAsDate;
		const newRecord = {
			'date': selectedDate,
			'transaction_name': date?.toDateString() || '',
			'amount': amountRef.current?.valueAsNumber || 0,
		};
		setRecords((prevState: Record[]) => [...prevState, newRecord]);
		clearInputFields();
	};
	
	const clearInputFields = () => {
		transactionRef.current!.value = '';
		amountRef.current!.value = '0';
	}

	const handleDateSelect = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<div className='lc-content'>
			<div className="">
				<div className="lc-container">
					<DatePickerDemo onSelect={handleDateSelect} />
					<Input ref={transactionRef} type="text" placeholder='Enter transaction type' onKeyUp={handleAutoSuggestion} />
					<Input ref={amountRef} type="number" name="amount" placeholder='Amount' className='w-auto' />
					{/* <div>Select box for category</div> */}
					<Button onClick={handleAddTransaction}>Add Transaction</Button>
				</div>

				<div className='lc-container'>
					<Textarea placeholder='Notes' className='grow w-4/5 resize-none' rows={1} />
					<div className='grow w-4/5'>
						<div>Tags</div>
						<BadgeComponent />
						<BadgeComponent />
						<BadgeComponent />
						<BadgeComponent />
						<BadgeComponent />
						<BadgeComponent />
					</div>
				</div>

				{/* <div className='lc-container'>
					<table className='w-full'>
						<thead key="thead">
							<tr>
								<th>Date</th>
								<th>Transaction</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							{records.length > 0 ? <NewRecord records={records} />
							: <tr><td colSpan={3} className='text-center'>No Records found !!!</td></tr>
							}
						</tbody>
					</table>
				</div> */}

				<DataTable columns={columns} data={records} />
			</div>
		</div>
	);
}

export default Ledger;
