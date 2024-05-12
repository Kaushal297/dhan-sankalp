import * as React from "react";
import { cn } from "@/lib/utils"
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";

interface DatePickerProps {
	onSelect: SelectSingleEventHandler;
}

export const DatePickerDemo: React.FC<DatePickerProps> = ({ onSelect }) => {
	const [date, setDate] = React.useState<Date | undefined>(undefined);

	const handleDateSelect: SelectSingleEventHandler = (selectedDate, modifiers, day, e) => {
		if (selectedDate) {
			setDate(selectedDate);
			onSelect(selectedDate, modifiers, day, e);
		}
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-[240px] justify-start text-left font-normal",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<Calendar mode="single" selected={date} onSelect={handleDateSelect} initialFocus />
			</PopoverContent>
		</Popover>
	);
};
