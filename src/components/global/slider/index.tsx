"use client";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, type SwiperProps } from "swiper/react";
import { Label } from "../../ui/label";

type SliderProps = {
	children: React.ReactNode;
	overlay?: boolean;
	label?: string;
} & SwiperProps;

export const Slider = ({ children, overlay, label, ...rest }: SliderProps) => {
	return (
		<div
			style={{
				maskImage: `linear-gradient(to right,rgba(0, 0, 0, 0),rgba(0, 0, 0, 1) 20%,rgba(0, 0, 0, 1) 80%,rgba(0, 0, 0, 0))`,
			}}
			className="relative mt-5 w-full max-w-full overflow-x-hidden "
		>
			{overlay && (
				<>
					<div className="slider-overlay absolute left-0 z-50 h-full w-[40px]" />
					<div className="slider-overlay-rev absolute right-0 z-50 h-full w-[40px]" />
				</>
			)}
			{label && <Label className="mb-3 pl-7 text-themeTextGray">{label}</Label>}
			<Swiper modules={[Navigation, Pagination, Autoplay, FreeMode]} {...rest}>
				{children}
			</Swiper>
		</div>
	);
};
