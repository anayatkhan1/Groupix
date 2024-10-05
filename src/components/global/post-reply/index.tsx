"use client";
import { UserComment } from "@/app/group/[groupid]/channel/[channelid]/[postid]/_components/comments/user-comment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostReply } from "@/hooks/channels";

import { Send } from "lucide-react";

type PostReplyProps = {
	commentid: string;
	postid: string;
	username: string;
	image: string;
};

export const PostReply = ({
	commentid,
	postid,
	username,
	image,
}: PostReplyProps) => {
	const { register, onCreateReply, variables, isPending } = usePostReply(
		commentid,
		postid,
	);
	return (
		<div className="flex w-full flex-col gap-y-5">
			{isPending && variables && (
				<UserComment
					postid={postid}
					id={variables.replyid}
					optimistic
					username={username}
					image={image}
					content={variables.comment}
				/>
			)}
			<form
				onSubmit={onCreateReply}
				className="mt-5 flex items-center overflow-hidden rounded-xl border-2 border-themeGray bg-transparent px-3 py-2"
			>
				<Input
					{...register("comment")}
					className="flex-1 border-none bg-transparent outline-none"
					placeholder="Add a comment..."
				/>
				<Button variant="ghost" className="p-0 hover:bg-transparent">
					<Send className="text-themeGray" />
				</Button>
			</form>
		</div>
	);
};
