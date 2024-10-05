import { cn } from "@/lib/utils";

type ChatBubbeProps = {
	senderid: string | null;
	createdAt: Date;
	message: string;
	userid: string;
};

export const ChatBubble = ({
	senderid,
	createdAt,
	message,
	userid,
}: ChatBubbeProps) => {
	return (
		<div
			className={cn(
				senderid === userid
					? "min-w-[15%] max-w-[60%] self-end bg-themeBlack"
					: "min-w-[15%] max-w-[60%] self-start bg-themeGray",
				"flex flex-col rounded-xl px-4 py-2 text-xl",
			)}
		>
			<p>{message}</p>
			<p className={cn("text-themeTextGray text-xs")}>
				{createdAt && (
					<>
						{createdAt.getHours()} {createdAt.getMinutes()}{" "}
						{createdAt.getHours() > 12 ? "pm" : "am"}
					</>
				)}
			</p>
		</div>
	);
};
