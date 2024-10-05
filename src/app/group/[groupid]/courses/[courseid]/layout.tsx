import { onGetCourseModules } from "@/actions/course";
import {
	HydrationBoundary,
	QueryClient,
	dehydrate,
} from "@tanstack/react-query";
import { CreateCourseModule } from "../_components/create-module";
import CourseModuleList from "../_components/module-list";

type CourseLayoutProps = {
	params: {
		courseid: string;
		groupid: string;
	};
	children: React.ReactNode;
};

const CourseLayout = async ({ params, children }: CourseLayoutProps) => {
	const client = new QueryClient();

	await client.prefetchQuery({
		queryKey: ["course-modules"],
		queryFn: () => onGetCourseModules(params.courseid),
	});

	return (
		<HydrationBoundary state={dehydrate(client)}>
			<div className="grid h-full grid-cols-1 overflow-hidden lg:grid-cols-4">
				<div className="overflow-y-auto bg-themeBlack p-5">
					<CreateCourseModule
						courseId={params.courseid}
						groupid={params.groupid}
					/>
					<CourseModuleList
						groupid={params.groupid}
						courseId={params.courseid}
					/>
				</div>
				<div className="h-full max-h-full overflow-y-auto bg-[#101011]/90 pb-10 lg:col-span-3">
					{children}
				</div>
			</div>
		</HydrationBoundary>
	);
};

export default CourseLayout;
