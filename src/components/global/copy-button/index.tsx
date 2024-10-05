"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

type CopyButtonProps = {
	content: string;
};

export const CopyButton = ({ content }: CopyButtonProps) => {
	return (
		<Button
			onClick={() => {
				navigator.clipboard.writeText(content);
				toast("Copied", {
					description: "Affiliate link copied to clipboard",
				});
			}}
			className="flex gap-x-3 border-themeGray bg-black hover:bg-themeDarkGray"
			variant="outline"
		>
			<Copy size={20} />
			Copy Link
		</Button>
	);
};
