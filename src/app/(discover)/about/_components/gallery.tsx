import MediaGalleryForm from "@/components/forms/media-gallery";
import { GlassModal } from "@/components/global/glass-modal";
import { Card, CardContent } from "@/components/ui/card";
import { BadgePlus } from "@/icons";
import { validateURLString } from "@/lib/utils";

type Props = {
	gallery: string[];
	groupid: string;

	onActive(media: { url: string | undefined; type: string }): void;
	userid: string;
	groupUserid: string;
};

const MediaGallery = ({
	gallery,
	groupUserid,
	onActive,
	groupid,
	userid,
}: Props) => {
	return (
		<div className="flex flex-wrap justify-start gap-3">
			{gallery.length > 0 &&
				gallery.map((gal, key) =>
					validateURLString(gal).type === "IMAGE" ? (
						<img
							onClick={() =>
								onActive({
									url: gal,
									type: "IMAGE",
								})
							}
							key={key}
							src={`https://ucarecdn.com/${gal}/`}
							alt="gallery-img"
							className="aspect-video w-36 cursor-pointer rounded-xl opacity-70"
						/>
					) : validateURLString(gal).type === "LOOM" ? (
						<div
							key={key}
							className="relative aspect-video w-36 cursor-pointer opacity-70"
						>
							<div
								className="absolute z-50 h-full w-full"
								onClick={() =>
									onActive({
										url: gal,
										type: "LOOM",
									})
								}
							></div>
							<iframe
								src={gal}
								className="absolute top-0 left-0 h-full w-full rounded-xl border-0 outline-none"
							></iframe>
						</div>
					) : (
						<div
							key={key}
							className="relative aspect-video w-36 cursor-pointer opacity-70"
						>
							<div
								className="absolute z-50 h-full w-full"
								onClick={() =>
									onActive({
										url: gal,
										type: "YOUTUBE",
									})
								}
							></div>
							<iframe
								className="absolute top-0 left-0 h-full w-full rounded-xl"
								src={gal}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
					),
				)}
			{userid === groupUserid ? (
				<GlassModal
					title="Add media to VSL"
					description="Paste a link to a youtube or a loom video."
					trigger={
						<Card className="cursor-pointer border-themeGray border-dashed bg-transparent hover:bg-themeBlack">
							<CardContent className="flex items-center justify-center px-16 py-10">
								<BadgePlus />
							</CardContent>
						</Card>
					}
				>
					<MediaGalleryForm groupid={groupid} />
				</GlassModal>
			) : (
				<></>
			)}
		</div>
	);
};

export default MediaGallery;
