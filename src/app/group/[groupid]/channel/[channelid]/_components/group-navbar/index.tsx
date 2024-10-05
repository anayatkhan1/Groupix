"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GROUPLE_CONSTANTS } from "@/constants";
import { useNavigation } from "@/hooks/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

type GroupNavBarProps = {
	orientation: "mobile" | "desktop";
    groupId: string
};

const GroupNavBar = ({ orientation, groupId }: GroupNavBarProps) => {
	const { section, onSetSection } = useNavigation();
	switch (orientation) {
		case "desktop":
			return (
				<Card className="backdrop--blur__safari flex w-fit items-center justify-center border-themeGray bg-themeGray bg-opacity-60 bg-clip-padding p-1 backdrop-blur-2xl backdrop-filter md:rounded-xl lg:flex">
					<CardContent className="flex gap-2 p-0">
						{GROUPLE_CONSTANTS.groupPageMenu.map((menuItem) => (
							<Link
								href={menuItem.label === 'Courses' ? `/group/${groupId}/courses`: menuItem.path}
								onClick={() => onSetSection(menuItem.path)}
								className={cn(
									"flex items-center gap-2 rounded-xl px-4 py-2",
									section == menuItem.path
										? "border-[#27272A] bg-[#09090B]"
										: "",
								)}
								key={menuItem.id}
							>
								{section == menuItem.path && menuItem.icon}

								{menuItem.label}
							</Link>
						))}
					</CardContent>
				</Card>
			);

		case "mobile":
			return (
				<div className="mt-10 flex flex-col">
					{GROUPLE_CONSTANTS.groupPageMenu.map((menuItem) => (
						<Link
							href={menuItem.path}
							onClick={() => onSetSection(menuItem.path)}
							className={cn(
								"flex items-center gap-2 rounded-xl px-4 py-2",
								section == menuItem.path ? "border-[#27272A] bg-themeGray" : "",
							)}
							key={menuItem.id}
						>
							{menuItem.icon}
							{menuItem.label}
						</Link>
					))}
				</div>
			);
		default:
			return <></>;
	}
};

export default GroupNavBar;
