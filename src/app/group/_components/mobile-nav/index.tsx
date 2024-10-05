import { Notification } from "@/components/global/user-widget/notification";
import { UserAvatar } from "@/components/global/user-widget/user";
import { Home, Message } from "@/icons";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

type Props = {
	groupid: string;
};

const MobileNav = async ({ groupid }: Props) => {
	const user = await currentUser();

	return (
		<div className="fixed bottom-0 z-50 flex w-screen items-center justify-between bg-[#1A1A1D] px-11 py-3 md:hidden">
			<Link href={`/group/${groupid}`}>
				<Home className="h-7 w-7" />
			</Link>
			<Notification />
			<Link href={`/group/${groupid}/messages`}>
				<Message className="h-7 w-7" />
			</Link>
			<UserAvatar image={user?.imageUrl!} groupid={groupid} />
		</div>
	);
};

export default MobileNav;
