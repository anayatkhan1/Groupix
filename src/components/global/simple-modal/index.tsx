import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

type SimpleModalProps = {
	trigger: JSX.Element;
	children: React.ReactNode;
	title?: string;
	description?: string;
	type?: "Integration";
	logo?: string;
};

export const SimpleModal = ({
	trigger,
	children,
	type,
	title,
	logo,
	description,
}: SimpleModalProps) => {
	switch (type) {
		case "Integration":
			return (
				<Dialog>
					<DialogTrigger asChild>{trigger}</DialogTrigger>
					<DialogContent className="border-themeDarkGray bg-themeBlack">
						<div className="flex justify-center gap-3 ">
							<div className="relative h-12 w-12">
								<Image
									src={`https://ucarecdn.com/2c9bd4ab-1f00-41df-bad2-df668f65a232/`}
									fill
									alt="Corinna"
								/>
							</div>
							<div className="text-gray-400">
								<ArrowLeft size={20} />
								<ArrowRight size={20} />
							</div>
							<div className="relative h-12 w-12">
								<Image
									src={`https://ucarecdn.com/${logo}/`}
									fill
									alt="Stripe"
								/>
							</div>
						</div>
						<DialogHeader className="flex items-center">
							<DialogTitle className="text-xl">{title}</DialogTitle>
							<DialogDescription className=" text-center">
								{description}
							</DialogDescription>
						</DialogHeader>
						{children}
					</DialogContent>
				</Dialog>
			);
		default:
			return (
				<Dialog>
					<DialogTrigger asChild>{trigger}</DialogTrigger>
					<DialogContent className="!max-w-2xl border-themeGray bg-[#1C1C1E]">
						{children}
					</DialogContent>
				</Dialog>
			);
	}
};
