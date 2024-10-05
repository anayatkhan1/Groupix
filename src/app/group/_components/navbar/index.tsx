import GlassSheet from "@/components/global/glass-sheet";
import Search from "@/components/global/search";
import SideBar from "@/components/global/sidebar";
import { UserWidget } from "@/components/global/user-widget";
import { Button } from "@/components/ui/button";
import { CheckBadge } from "@/icons";
import { currentUser } from "@clerk/nextjs/server";
import { Menu } from "lucide-react";
import Link from "next/link";

type NavbarProps = {
	groupid: string;
	userid: string;
};

export const Navbar = async ({ groupid, userid }: NavbarProps) => {
	const user = await currentUser();
	return (
		<div className="flex items-center justify-between gap-5 bg-[#1A1A1D] px-3 py-2 md:justify-end md:px-7 md:py-5">
			<GlassSheet trigger={<Menu className="cursor-pointer md:hidden" />}>
				<SideBar groupid={groupid} userid={userid} mobile />
			</GlassSheet>
			<Search
				searchType="POSTS"
				className="!opacity-100 rounded-full border-themeGray bg-black px-3"
				placeholder="Search..."
			/>
			<Link href={`/group/create`} className="hidden md:inline">
				<Button
					variant="outline"
					className="flex gap-2 rounded-2xl border-themeGray bg-themeBlack hover:bg-themeGray"
				>
					<CheckBadge />
					Create Group
				</Button>
			</Link>
			<UserWidget userid={userid} image={user?.imageUrl!} groupid={groupid} />
		</div>
	);
};
