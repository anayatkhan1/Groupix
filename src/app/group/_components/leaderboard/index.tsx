import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LeaderBoardCardProps = {
	light?: boolean;
};

export const LeaderBoardCard = ({ light }: LeaderBoardCardProps) => {
	return (
		<Card
			className={cn(
				"mt-10 overflow-hidden rounded-xl border-themeGray p-5 lg:sticky lg:top-0 lg:mt-0",
				light ? "border-themeGray bg-[#1A1A1D]" : "bg-themeBlack",
			)}
		>
			<h2 className="font-bold text-themeTextWhite text-xl">
				leaderboard (30-days)
			</h2>
			<p className="text-sm text-themeTextGray">
				See who performed the best this month.
			</p>
		</Card>
	);
};
