import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import GradientText from "@/components/global/gradient-text";
import { GROUPLE_CONSTANTS } from "@/constants";

type Props = {
	children: React.ReactNode;
};

const CreateGroupLayout = ({ children }: Props) => {
	return (
		<div className="container grid h-screen grid-cols-1 content-center lg:grid-cols-2">
			<div className="flex items-center">
				<BackdropGradient className="h-2/6 w-8/12 opacity-50">
					<h5 className="font-bold text-2xl text-themeTextWhite">groupix.</h5>
					<GradientText element="H2" className="py-1 font-semibold text-4xl">
						Create Your Group
					</GradientText>
					<p className="text-themeTextGray">
						Free for 14 days, then $99/month. Cancel anytime.All features.
						Unlimited everything. No hidden fees.
					</p>
					<div className="mt-16 flex flex-col gap-3 pl-5">
						{GROUPLE_CONSTANTS.createGroupPlaceholder.map((placeholder) => (
							<div className="flex gap-3" key={placeholder.id}>
								{placeholder.icon}
								<p className="text-themeTextGray">{placeholder.label}</p>
							</div>
						))}
					</div>
				</BackdropGradient>
			</div>
			<div>
				<BackdropGradient
					className="h-3/6 w-6/12 opacity-40"
					container="lg:items-center"
				>
					<GlassCard className="mt-16 xs:w-full py-7 lg:w-10/12 xl:w-8/12">
						{children}
					</GlassCard>
				</BackdropGradient>
			</div>
		</div>
	);
};

export default CreateGroupLayout;
