"use client";
import { JoinButton } from "@/app/(discover)/about/_components/join-button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGroupInfo } from "@/hooks/groups";
import { cn, truncateString } from "@/lib/utils";

type Props = {
	light?: boolean;
	groupid?: string;
	userid?: string;
};

const GroupSideWidget = ({ groupid, light, userid }: Props) => {
	const { group } = useGroupInfo();

	return (
		<Card
			className={cn(
				"mt-10 overflow-hidden rounded-xl border-themeGray lg:sticky lg:top-0 lg:mt-0",
				light ? "border-themeGray bg-[#1A1A1D]" : "bg-themeBlack",
			)}
		>
			<img
				src={`https://ucarecdn.com/${group.thumbnail}/`}
				alt="thumbnail"
				className="aspect-video w-full"
			/>
			<div className="flex flex-col gap-y-2 p-5">
				<h2 className="font-bold text-lg">{group.name}</h2>
				<p className="text-sm text-themeTextGray">
					{group.description && truncateString(group.description)}
				</p>
			</div>
			<Separator orientation="horizontal" className="bg-themeGray" />
			{groupid && (
				<JoinButton
					groupid={groupid}
					owner={group.userId === userid ? true : false}
				/>
			)}
		</Card>
	);
};

export default GroupSideWidget;
