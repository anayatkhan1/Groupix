import { Card } from "@/components/ui/card";
import { truncateString } from "@/lib/utils";
import Link from "next/link";

type Props = {
	id: string;
	name: string;
	category: string;
	createdAt: Date;
	userId: string;
	thumbnail: string | null;
	description: string | null;
	privacy: "PUBLIC" | "PRIVATE";
	preview?: string;
};

const GroupCard = ({
	id,
	userId,
	thumbnail,
	name,
	category,
	description,
	privacy,
	preview,
}: Props) => {
	return (
		<Link href={`/about/${id}`}>
			<Card className="overflow-hidden rounded-xl border-themeGray bg-themeBlack">
				<img
					src={preview || `https://ucarecdn.com/${thumbnail}/`}
					alt="thumbnail"
					className="h-56 w-full opacity-70"
				/>
				<div className="p-6">
					<h3 className="font-bold text-lg text-themeTextGray">{name}</h3>
					<p className="text-base text-themeTextGray">
						{description && truncateString(description)}
					</p>
				</div>
			</Card>
		</Link>
	);
};

export default GroupCard;
