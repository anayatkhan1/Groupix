import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type PostAuthorProps = {
	image?: string;
	username?: string;
	channel: string;
};

export const PostAuthor = ({ image, username, channel }: PostAuthorProps) => {
	return (
		<div className="flex items-center gap-x-3">
			<Avatar className="cursor-pointer">
				<AvatarImage src={image} alt="user" />
				<AvatarFallback>U</AvatarFallback>
			</Avatar>
			<div className="flex flex-col">
				<p className="text-sm text-themeTextGray capitalize">{username}</p>
				<p className="captialize text-sm text-themeTextGray">
					Posted in{" "}
					<span className="font-bold text-themeTextWhite capitalize">
						{channel}
					</span>
				</p>
			</div>
		</div>
	);
};
