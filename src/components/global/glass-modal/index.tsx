import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

type GlassModalProps = {
	trigger: JSX.Element;
	children: React.ReactNode;
	title: string;
	description: string;
};

export const GlassModal = ({
	trigger,
	children,
	title,
	description,
}: GlassModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="backdrop--blur__safari border-themeGray bg-themeGray bg-opacity-20 bg-clip-padding backdrop-blur-3xl backdrop-filter">
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	);
};
