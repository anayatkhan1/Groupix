import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMediaGallery } from "@/hooks/groups";
import { BadgePlus } from "@/icons";
import { ErrorMessage } from "@hookform/error-message";

type Props = {
	groupid: string;
};

const MediaGalleryForm = ({ groupid }: Props) => {
	const { errors, register, onUpdateGallery, isPending } =
		useMediaGallery(groupid);

	return (
		<form onSubmit={onUpdateGallery} className="flex flex-col gap-y-3">
			<FormGenerator
				register={register}
				errors={errors}
				name="videourl"
				label="Video Link"
				placeholder="Video link..."
				inputType="input"
				type="text"
			/>
			<Label className="" htmlFor="media-gallery">
				<p>or Upload and Image</p>
				<span className="my-2 flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border-[1px] border-themeGray border-dashed bg-themeBlack py-10 hover:bg-themeGray/50">
					<Input
						type="file"
						className="hidden"
						id="media-gallery"
						multiple
						{...register("image")}
					/>
					<BadgePlus />
					<p>Drag and drop an image</p>
				</span>
				<ErrorMessage
					errors={errors}
					name={"image"}
					render={({ message }) => (
						<p className="mt-2 text-red-400">
							{message === "Required" ? "" : message}
						</p>
					)}
				/>
			</Label>
			<Button className="self-end rounded-xl" disabled={isPending}>
				<Loader loading={isPending}>Upload</Loader>
			</Button>
		</form>
	);
};

export default MediaGalleryForm;
