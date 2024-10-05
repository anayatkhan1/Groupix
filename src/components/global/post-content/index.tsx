"use client";
import BlockTextEditor from "@/components/global/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateChannelPost } from "@/hooks/channels";

import { Upload } from "lucide-react";

type PostContentProps = {
	channelid: string;
};

export const PostContent = ({ channelid }: PostContentProps) => {
	const {
		errors,
		register,
		onDescription,
		onJsonDescription,
		onHtmlDescription,
		setOnDescription,
		setOnHtmlDescription,
		setJsonDescription,
		onCreatePost,
	} = useCreateChannelPost(channelid);

	return (
		<form className="flex w-full flex-col gap-y-5" onSubmit={onCreatePost}>
			<Input
				placeholder="Title"
				className="border-none bg-transparent p-0 text-2xl outline-none"
				{...register("title")}
			/>
			<BlockTextEditor
				errors={errors}
				name="jsoncontent"
				min={0}
				max={10000}
				inline
				onEdit
				textContent={onDescription}
				content={onJsonDescription}
				setContent={setJsonDescription}
				setTextContent={setOnDescription}
				htmlContent={onHtmlDescription}
				setHtmlContent={setOnHtmlDescription}
			/>
			<Button className="flex gap-x-2 self-end rounded-2xl bg-themeTextGray">
				<Upload />
				Create
			</Button>
		</form>
	);
};
