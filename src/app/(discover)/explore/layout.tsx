import { onAuthenticatedUser } from "@/actions/auth";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GradientText from "@/components/global/gradient-text";

import { GroupListSlider } from "@/components/global/group-list-slider";
import Search from "@/components/global/search";

import Link from "next/link";
import React from "react";

const ExploreLayout = async ({ children }: { children: React.ReactNode }) => {
	const user = await onAuthenticatedUser();
	return (
		<div className="flex flex-1 flex-col">
			<div className="mt-36 flex flex-col items-center px-10">
				<GradientText
					className="font-semibold text-[90px] leading-none"
					element="H2"
				>
					Explore Groups
				</GradientText>
				<p className="pt-2 text-themeTextGray leading-none">
					or{" "}
					<Link
						href={user.status === 200 ? `/group/create` : "/sign-in"}
						className="underline"
					>
						create your own
					</Link>
				</p>
				<BackdropGradient
					className="h-3/6 w-4/12 md:w-5/12 xl:h-2/6 xl:w-3/12"
					container="items-center"
				>
					<Search
						placeholder="Search for anything"
						searchType="GROUPS"
						glass
						inputStyle="lg:w-[500px] text-lg h-auto z-[9999]"
						className="mt-10 mb-3 rounded-3xl border-themeGray px-5 py-2"
					/>
					<div className="w-full md:w-[800px]">
						<GroupListSlider overlay route />
					</div>
				</BackdropGradient>
			</div>
			{children}
		</div>
	);
};

export default ExploreLayout;
