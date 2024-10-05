"use client";

import { cn } from "@/lib/utils";

type GroupListItemProps = {
	icon: JSX.Element;
	label: string;
	selected?: string;
};

export const GroupListItem = ({
	icon,
	label,
	selected,
}: GroupListItemProps) => {
	return (
		<div
			className={cn(
				"flex cursor-pointer items-center gap-3 rounded-2xl border-2 bg-themeGray px-4 py-2",
				selected === label.toLocaleLowerCase()
					? "border-lime-600 bg-gradient-to-r from-lime-400 via-lime-700 to-lime-600"
					: "border-themeGray",
			)}
		>
			{icon}
			{label}
		</div>
	);
};
