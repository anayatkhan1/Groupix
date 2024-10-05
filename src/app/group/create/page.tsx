import { onAuthenticatedUser } from "@/actions/auth";
import { onGetAffiliateInfo } from "@/actions/groups";
import CreateGroup from "@/components/forms/create-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { redirect } from "next/navigation";

const GroupCreatePage = async ({
	searchParams,
}: {
	searchParams: { [affiliate: string]: string };
}) => {
	const user = await onAuthenticatedUser();

	const affiliate = await onGetAffiliateInfo(searchParams.affiliate ?? "");
	if (!user || !user.id) {
		console.log("user not found");
		redirect("/sign-up");
	}

	return (
		<>
			<div className="flex flex-col px-7">
				<h5 className="font-bold text-base text-themeTextWhite">
					Payment Method
				</h5>
				<p className="text-themeTextGray leading-tight">
					Free for 14 days, then $99/month. Cancel anytime.All features.
					Unlimited everything. No hidden fees.
				</p>
				{affiliate.status === 200 && (
					<div className="mt-5 flex w-full items-center justify-center gap-x-2 text-sm text-themeTextGray italic">
						You were referred by
						<Avatar>
							<AvatarImage
								src={affiliate.user?.Group?.User.image as string}
								alt="User"
							/>
							<AvatarFallback>
								<User />
							</AvatarFallback>
						</Avatar>
						{affiliate.user?.Group?.User.firstname}{" "}
						{affiliate.user?.Group?.User.lastname}
					</div>
				)}
			</div>
			<CreateGroup
				userId={user.id}
				affiliate={affiliate.status === 200 ? true : false}
				stripeId={affiliate.user?.Group?.User.stripeId || ""}
			/>
		</>
	);
};

export default GroupCreatePage;
