"use client";

import { UserComment } from "@/app/group/[groupid]/channel/[channelid]/[postid]/_components/comments/user-comment";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePostComment } from "@/hooks/channels";

import { Send } from "lucide-react";

type PostCommentFormProps = {
	postid: string;
	image: string;
	username: string;
};

export const PostCommentForm = ({
	postid,
	image,
	username,
}: PostCommentFormProps) => {
	const { isPending, onCreateComment, register, variables } =
		usePostComment(postid);

	return (
		<div className="flex flex-col gap-y-5">
			<form
				onSubmit={onCreateComment}
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
			{isPending && variables && (
				<UserComment
					postid={postid}
					id={variables.commentid}
					optimistic
					username={username}
					image={image}
					content={variables.content}
				/>
			)}
		</div>
	);
};
