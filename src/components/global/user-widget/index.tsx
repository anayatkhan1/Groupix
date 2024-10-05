import { Message } from "@/icons";
import Link from "next/link";
import { Notification } from "./notification";
import { UserAvatar } from "./user";

type UserWidgetProps = {
	image: string;
	groupid?: string;
	userid?: string;
};

export const UserWidget = ({ image, groupid, userid }: UserWidgetProps) => {
	return (
		<div className="hidden items-center gap-5 md:flex">
			<Notification />
			<Link href={`/group/${groupid}/messages`}>
				<Message />
			</Link>
			<UserAvatar userid={userid} image={image} groupid={groupid} />
		</div>
	);
};
