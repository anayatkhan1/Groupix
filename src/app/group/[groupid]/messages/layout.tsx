import GlassSheet from "@/components/global/glass-sheet";
import { Menu } from "lucide-react";
import { GroupChatMenu } from "./_components/chat-menu";

type HuddlesLayoutProps = {
	children: React.ReactNode;
	params: { groupid: string };
};

const HuddlesLayout = async ({ children, params }: HuddlesLayoutProps) => {
	return (
		<div className="grid h-0 flex-1 grid-cols-1 lg:grid-cols-6">
			<div className="flex flex-col lg:col-span-4">
				<div className="flex items-center justify-between p-5 lg:hidden">
					<p className="font-medium text-themeTextWhite">No chat selected</p>
					<GlassSheet trigger={<Menu />}>
						<GroupChatMenu groupid={params.groupid} />
					</GlassSheet>
				</div>
				{children}
			</div>
			<div className="hidden overflow-auto rounded-tl-3xl bg-themeBlack lg:col-span-2 lg:inline">
				<GroupChatMenu groupid={params.groupid} />
			</div>
		</div>
	);
};

export default HuddlesLayout;
