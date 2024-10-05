import { Empty } from "@/icons";
import { RefreshCcw } from "lucide-react";
import Link from "next/link";

export const NoResult = () => {
	return (
		<div className="flex flex-col items-center gap-y-16 md:col-span-2 lg:col-span-3">
			<Link href="/explore" className="flex gap-3 text-themeTextGray">
				<RefreshCcw />
				Refresh
			</Link>
			<Empty />
			<div>
				<p className="font-semibold text-themeTextGray text-xl">
					Hmm... Its quite in here
				</p>
				<p className="text-sm text-themeTextGray">0 Results Found...</p>
			</div>
		</div>
	);
};
