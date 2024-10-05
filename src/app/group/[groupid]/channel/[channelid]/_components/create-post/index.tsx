"use client";

import { PostContent } from "@/components/global/post-content";
import { SimpleModal } from "@/components/global/simple-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { useChannelPage } from "@/hooks/channels";
import { PostCard } from "../post-feed/post-card";

type Props = { userImage: string; channelid: string; username: string };

const CreateNewPost = ({ channelid, userImage, username }: Props) => {
	const { data, mutation } = useChannelPage(channelid);
	const { name } = data as { name: string };

	return (
		<>
			<SimpleModal
				trigger={
					<span>
						<Card className="cursor-pointer overflow-hidden border-themeGray first-letter:rounded-2xl">
							<CardContent className="flex items-center gap-x-6 bg-[#1A1A1D] p-3 ">
								<Avatar className="cursor-pointer">
									<AvatarImage src={userImage} alt="user" />
									<AvatarFallback>U</AvatarFallback>
								</Avatar>
								<CardDescription className="text-themeTextGray">
									Type / to add elements to your post...
								</CardDescription>
							</CardContent>
						</Card>
					</span>
				}
			>
				<div className="flex gap-x-3">
					<Avatar className="cursor-pointer">
						<AvatarImage src={userImage} alt="user" />
						<AvatarFallback>U</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<p className="text-sm text-themeTextGray capitalize">{username}</p>
						<p className="captialize text-sm text-themeTextGray">
							Posting in{" "}
							<span className="font-bold text-themeTextWhite capitalize">
								{name}
							</span>
						</p>
					</div>
				</div>
				<PostContent channelid={channelid} />
			</SimpleModal>
			{mutation.length > 0 &&
				mutation[0]?.status === "pending" &&
				mutation[0].state && (
					<PostCard
						channelname={name}
						userimage={userImage}
						username={username}
						html={mutation[0].state.htmlcontent}
						title={mutation[0].state.title}
						likes={0}
						comments={0}
						postid={mutation[0].state.postid}
						optimisitc
					/>
				)}
		</>
	);
};

export default CreateNewPost;
