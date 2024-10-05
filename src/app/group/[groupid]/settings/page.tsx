import GroupSettingsForm from "@/components/forms/group-settings";

type Props = {};

const GroupSettingsPage = ({ params }: { params: { groupid: string } }) => {
	return (
		<div className="flex h-full w-full flex-col gap-10 overflow-auto px-16 py-10">
			<div className="flex flex-col">
				<h3 className="font-bold text-3xl">Group Settings</h3>
				<p className="text-sm text-themeTextGray">
					Adjust your group settings here. These settings might take time to
					reflect on the explore page.
				</p>
			</div>
			<GroupSettingsForm groupId={params.groupid} />
		</div>
	);
};

export default GroupSettingsPage;
