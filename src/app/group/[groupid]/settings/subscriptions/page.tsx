import { GroupSubscriptionForm } from "@/components/forms/subscription";
import { Subscriptions } from "./_components/subscriptions";

type Props = {
	params: { groupid: string };
};

const SubscriptionPage = ({ params }: Props) => {
	return (
		<div className="flex flex-col gap-y-10 p-10">
			<h2 className="font-bold text-3xl">Group Subscriptions</h2>
			<div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
				<GroupSubscriptionForm groupid={params.groupid} />
				<Subscriptions groupid={params.groupid} />
			</div>
		</div>
	);
};

export default SubscriptionPage;
