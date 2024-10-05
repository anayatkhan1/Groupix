import GlassSheet from "@/components/global/glass-sheet";
import { Button } from "@/components/ui/button";
import { Logout } from "@/icons";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Menu from "./menu";

type Props = {};

const LandingPageNavbar = (props: Props) => {
	return (
		<div className="sticky top-0 z-50 flex w-full items-center justify-between py-5">
			<p className="font-bold text-2xl">Groupix.</p>
			<Menu orientation="desktop" />
			<div className="flex gap-2">
				<Link href="/sign-in">
					<Button
						variant="outline"
						className="flex gap-2 rounded-2xl border-themeGray bg-themeBlack hover:bg-themeGray"
					>
						<Logout />
						Login
					</Button>
				</Link>
				<GlassSheet
					triggerClass="lg:hidden"
					trigger={
						<Button variant="ghost" className="hover:bg-transparent">
							<MenuIcon size={30} />
						</Button>
					}
				>
					<Menu orientation="mobile" />
				</GlassSheet>
			</div>
		</div>
	);
};

export default LandingPageNavbar;
