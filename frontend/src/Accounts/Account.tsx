import Icons from "@/components/common/Icons"
import { DataTable } from "@/components/common/reactTable"
import { ColumnDef } from "@tanstack/react-table"

import type {accounts} from "@/types"

const columns: ColumnDef<accounts>[] = [
	{
		accessorKey: 'account_name',
		header: () => <div className="date-render">Name</div>,
		size: 500,
	},
	{
		accessorKey: 'bank_type',
		header: () => <div className="date-render">Type</div>,
		size: 400,
	},
	{
		accessorKey: 'bank_name',
		header: () => <div className="date-render">Registered Name</div>,
		size: 300,
	},
	{
		accessorKey: 'initial_amount',
		header: () => <div className="date-render">Amount</div>,
		size: 200,
	},
	{
		accessorKey: 'operations',
		header: () => <div className="date-render"></div>,
		cell: () => <Icons name="3dot" className="w-8" />,
		size: 50,
		
	}
]
console.log("🚀 ~ columns:", columns)

const accounts: accounts[] = [
	{
		account_name: 'ICICI - Salary Account',
		initial_amount: 0,
		bank_type: 'PRIVATE_BANKS',
		bank_name: 'ICICI Bank Limited',
	}
]

const Accounts: React.FC = () => {
	return (
		<>
			<h1>Accounts</h1>
			<div>
				<DataTable columns={columns} data={accounts} />
			</div>
		</>
	)
}

export default Accounts