import {ColumnDef} from "@tanstack/react-table"
import { SelectSingleEventHandler } from "react-day-picker";

export interface DatePickerProps {
	onSelect: SelectSingleEventHandler;
}

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface accounts {
	account_name: string,
	initial_amount: number,
	bank_type: string,
	bank_name: string,
}

export interface Props { }

export interface Record {
	date: Date | null,
	transaction_name: string,
	amount: number,
}

export interface SheetProps {
	buttonText: String,
	sheetTitleText: String,
	SheetDescriptionText: String,
	sheetBody: JSX.Element,

}