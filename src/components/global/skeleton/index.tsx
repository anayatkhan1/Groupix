import { Skeleton as SkeletonUI } from "@/components/ui/skeleton";

type Props = {
	element: "CARD" | "POST";
};

const Skeleton = ({ element }: Props) => {
	switch (element) {
		case "CARD":
			return (
				<div className="flex h-full flex-col gap-y-3 overflow-hidden rounded-xl bg-[#181818]">
					<SkeletonUI className="h-[200px] w-full bg-[#202020]" />
					<SkeletonUI className="ml-5 h-[40px] w-7/12 rounded-md bg-[#202020]" />
					<SkeletonUI className="ml-5 h-[30px] w-4/12 rounded-md bg-[#202020]" />
				</div>
			);

		case "POST":
			return (
				<div className=" w-full overflow-hidden rounded-lg border border-[#27272A] bg-[#1C1C1E] pt-4 text-white">
					<div className="mb-3 flex items-center px-4">
						<SkeletonUI className="mr-4 h-12 w-12 rounded-full bg-[#202020]" />
						<div>
							<SkeletonUI className="mb-1 h-5 w-24 rounded-md bg-[#202020]" />
							<SkeletonUI className="h-4 w-40 rounded-md bg-[#202020]" />
						</div>
					</div>
					<SkeletonUI className="h-[280px] w-full bg-[#202020]" />
					<div className="flex items-center gap-3 border-[#27272A] border-t px-6 py-2">
						<SkeletonUI className="h-4 w-20 rounded-md bg-[#202020]" />
						<SkeletonUI className="h-4 w-20 rounded-md bg-[#202020]" />
						<SkeletonUI className="h-4 w-20 rounded-md bg-[#202020]" />
					</div>
				</div>
			);

		default:
			return <></>;
	}
};

export default Skeleton;
