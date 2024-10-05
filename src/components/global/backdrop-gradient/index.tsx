import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	className?: string;
	container?: string;
};

const BackdropGradient = ({ children, className, container }: Props) => {
	return (
		<div className={cn("relative flex w-full flex-col", container)}>
			<div
				className={cn("radial--blur absolute mx-10 rounded-[50%]", className)}
			/>
			{children}
		</div>
	);
};

export default BackdropGradient;
