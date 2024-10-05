import { onAuthenticatedUser } from "@/actions/auth";
import { onGetUserGroups } from "@/actions/groups";

import GlassSheet from "@/components/global/glass-sheet";
import { UserWidget } from "@/components/global/user-widget";
import { Button } from "@/components/ui/button";
import { CheckBadge, Logout } from "@/icons";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { GroupDropDown } from "./group-dropdown";

export const Navbar = async () => {
	const user = await onAuthenticatedUser();
	const groups = await onGetUserGroups(user.id!);

	return (
		<div className="backdrop--blur__safari fixed z-50 flex w-full items-center border-themeDarkGray border-b-[1px] bg-themeBlack bg-opacity-60 bg-clip-padding px-5 py-3 backdrop-blur-2xl backdrop-filter">
			<div className="hidden lg:inline">
				{user.status === 200 ? (
					<GroupDropDown members={groups.members} groups={groups} />
				) : (
					<p>groupix.</p>
				)}
			</div>
			<GlassSheet
				trigger={
					<span className="flex items-center gap-2 py-2 lg:hidden">
						<MenuIcon className="cursor-pointer" />
						<p>groupix.</p>
					</span>
				}
			>
				<div>Content</div>
			</GlassSheet>
			<div className="hidden flex-1 justify-end gap-3 lg:flex">
				<Link href={user.status === 200 ? `/group/create` : "/sign-in"}>
					<Button
						variant="outline"
						className="flex gap-2 rounded-2xl border-themeGray bg-themeBlack hover:bg-themeGray"
					>
						<CheckBadge />
						Create Group
					</Button>
				</Link>
				{user.status === 200 ? (
					<UserWidget image={user.image!} />
				) : (
					<Link href="/sign-in">
						<Button
							variant="outline"
							className="flex gap-2 rounded-2xl border-themeGray bg-themeBlack hover:bg-themeGray"
						>
							<Logout />
							Login
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};
