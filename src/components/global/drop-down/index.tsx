"use client";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

type DropDownProps = {
	title: string;
	trigger: JSX.Element;
	children: React.ReactNode;
	ref?: React.RefObject<HTMLButtonElement>;
};

export const DropDown = ({ trigger, title, children, ref }: DropDownProps) => {
	return (
		<Popover>
			<PopoverTrigger asChild ref={ref}>
				{trigger}
			</PopoverTrigger>
			<PopoverContent className="backdrop--blur__safari w-56 items-start rounded-2xl border-themeGray bg-themeBlack bg-clip-padding p-4 backdrop-blur-4xl backdrop-filter">
				<h4 className="pl-3 text-sm">{title}</h4>
				<Separator className="my-3 bg-themeGray" />
				{children}
			</PopoverContent>
		</Popover>
	);
};
