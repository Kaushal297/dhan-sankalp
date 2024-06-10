import Icons from "@/components/common/Icons"
import { DataTable } from "@/components/common/reactTable"
import { ColumnDef } from "@tanstack/react-table"

import type { accounts } from "@/types"
import SheetDemo from "@/components/common/CustomSheetComponent"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const columns: ColumnDef<accounts>[] = [
	{
		accessorKey: 'account_name',
		header: () => <div>Name</div>,
	},
	{
		accessorKey: 'bank_type',
		header: () => <div>Type</div>,
	},
	{
		accessorKey: 'bank_name',
		header: () => <div>Registered Name</div>,
	},
	{
		accessorKey: 'initial_amount',
		header: () => <div>Amount</div>,
	},
	{
		accessorKey: 'operations',
		header: () => <div>&nbsp;</div>,
		cell: () => <Icons name="3dot" />,
	}
]

const accounts: accounts[] = [
	{
		account_name: 'ICICI - Salary Account',
		initial_amount: 0,
		bank_type: 'PRIVATE_BANKS',
		bank_name: 'ICICI Bank Limited',
	}
]

const sheetBody: React.ReactNode = (
	<div className="grid gap-4 py-4">
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="name" className="text-right">
				Name
			</Label>
			<Input id="name" value="" className="col-span-3" />
		</div>
		<div className="grid grid-cols-4 items-center gap-4">
			<Label htmlFor="username" className="text-right">
				Username
			</Label>
			<Input id="username" value="" className="col-span-3" />
		</div>
	</div>
)

const Accounts: React.FC = () => {
	return (
		<>
			<div className="flex justify-between my-3">
				<h1>Accounts</h1>
				<SheetDemo
					buttonText="Add Account"
					sheetTitleText="Enter below details to add accounts"
					SheetDescriptionText="lorem"
					sheetBody={sheetBody} />
			</div>
			<div>
				<DataTable columns={columns} data={accounts} />
			</div>
		</>
	)
}

export default Accounts