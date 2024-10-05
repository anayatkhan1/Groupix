"use client";

import { useChatWindow } from "@/hooks/groups";
import { useAppSelector } from "@/redux/store";
import { ChatBubble } from "../chat-bubble";

type ChatWindowProps = {
	recieverid: string;
	userid: string;
};

export const ChatWindow = ({ recieverid, userid }: ChatWindowProps) => {
	const { messageWindowRef } = useChatWindow(recieverid);
	const { chat } = useAppSelector((state) => state.chatReducer);

	return (
		<div
			className="flex h-0 flex-1 flex-col gap-y-3 overflow-auto py-5"
			ref={messageWindowRef}
		>
			{chat.map((c) => (
				<ChatBubble key={c.id} {...c} userid={userid} />
			))}
		</div>
	);
};
