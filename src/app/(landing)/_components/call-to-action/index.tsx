import GradientText from "@/components/global/gradient-text";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "@/icons";
import Link from "next/link";

type Props = {};

const CallToAction = (props: Props) => {
	return (
		<div className="flex flex-col items-start gap-y-5 md:items-center md:gap-y-0">
			<GradientText
				className="font-semibold text-[35px] leading-tight md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px]"
				element="H1"
			>
				Bringing Communities <br className="md:hidden" /> Together
			</GradientText>
			<p className="text-left text-muted-foreground text-sm md:text-center">
				groupix is a vibrant online community platform that empowers
				<br className="md:hidden" />
				people to connect, <br className="hidden md:block" /> collaborate, and
				cultivate meaningful
				<br className="md:hidden" />
				relationships
			</p>
			<div className="flex w-full flex-col gap-5 md:mt-5 md:flex-row md:justify-center">
				<Button
					variant="outline"
					className="rounded-xl bg-transparent text-base"
				>
					Watch Demo
				</Button>
				<Link href="/sign-in">
					<Button className="flex w-full gap-2 rounded-xl text-base">
						<BadgePlus /> Get Started
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default CallToAction;
