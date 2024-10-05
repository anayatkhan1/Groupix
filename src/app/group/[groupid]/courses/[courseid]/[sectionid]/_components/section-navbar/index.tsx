"use client";
import { Button } from "@/components/ui/button";
import { useSectionNavBar } from "@/hooks/courses";
import { Check } from "lucide-react";

type Props = {
	sectionid: string;
};

const SectionNavBar = ({ sectionid }: Props) => {
	const { data, mutate, isPending } = useSectionNavBar(sectionid);

	if (data?.status !== 200) return <></>;

	return (
		<div className="flex items-center justify-between overflow-y-auto p-5">
			<div>
				<p className="text-themeTextGray">Course Title</p>
				<h2 className="font-bold text-3xl text-themeTextWhite">
					{data.section?.name}
				</h2>
			</div>
			<div>
				<Button
					className="flex items-center gap-x-3 border-themeGray bg-themeDarkGray text-themeTextWhite"
					variant="outline"
					onClick={() => mutate()}
				>
					<Check size={16} />
					{isPending
						? "Completed"
						: !data.section?.complete
							? "Mark as complete"
							: "Completed"}
				</Button>
			</div>
		</div>
	);
};

export default SectionNavBar;
