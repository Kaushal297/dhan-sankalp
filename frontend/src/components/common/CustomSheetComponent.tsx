import { Button } from "@/components/ui/button"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { SheetProps } from "@/types"


const SheetDemo: React.FC<SheetProps> = ({ buttonText = "Text", sheetTitleText, SheetDescriptionText, sheetBody }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button>{buttonText}</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>{sheetTitleText}</SheetTitle>
					<SheetDescription>
						{SheetDescriptionText}
					</SheetDescription>
				</SheetHeader>
				{sheetBody}
				<SheetFooter>
					<SheetClose asChild>
						<Button type="submit">Save</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default SheetDemo