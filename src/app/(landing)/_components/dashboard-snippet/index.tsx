import Image from "next/image";

type Props = {};

const DashboardSnippet = (props: Props) => {
	return (
		<div className="relative py-20">
			<div className="radial--blur absolute mx-10 h-3/6 w-full rounded-[50%] opacity-40" />

			<div className="relative aspect-video w-full">
				<Image
					priority
					src="/dashboard-snippet.png"
					className="opacity-[0.95]"
					alt="snippet"
					sizes="100vw"
					fill
					objectFit="contain"
				/>
			</div>
		</div>
	);
};

export default DashboardSnippet;
