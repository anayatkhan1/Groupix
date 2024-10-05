"use client";

import { GlobalAccordion } from "@/components/global/accordion";
import { Button } from "@/components/ui/button";
import { useCreateModule } from "@/hooks/courses";
import { Plus, PlusCircle } from "lucide-react";

type CreateCourseModuleProps = {
	courseId: string;
	groupid: string;
};

export const CreateCourseModule = ({
	courseId,
	groupid,
}: CreateCourseModuleProps) => {
	const { variables, isPending, onCreateModule, data } = useCreateModule(
		courseId,
		groupid,
	);

	if (!data?.groupOwner) {
		return <></>;
	}

	return (
		<div className="flex flex-col gap-y-2">
			<div className="flex justify-end">
				<PlusCircle
					onClick={onCreateModule}
					className="cursor-pointer text-themeGray hover:text-themeTextGray/60"
				/>
			</div>
			{variables && isPending && (
				<GlobalAccordion id={variables.moduleId} title={variables.title}>
					<Button
						variant="outline"
						className="mt-2 border-themeGray bg-transparent text-themeTextGray"
					>
						<Plus />
					</Button>
				</GlobalAccordion>
			)}
		</div>
	);
};
