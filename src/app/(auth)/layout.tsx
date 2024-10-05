import { onAuthenticatedUser } from "@/actions/auth";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import { redirect } from "next/navigation";

type Props = {
	children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
	const user = await onAuthenticatedUser();
	if (user.status === 200) redirect("/callback/sign-in");

	return (
		<div className="container flex h-screen items-center justify-center">
			<div className="flex w-full flex-col items-center py-24">
				<h2 className="font-bold text-4xl text-themeTextWhite">groupix.</h2>
				<BackdropGradient
					className="h-2/6 w-4/12 opacity-40"
					container="flex flex-col items-center"
				>
					<GlassCard className="mt-16 xs:w-full p-7 md:w-7/12 lg:w-5/12 xl:w-4/12">
						{children}
					</GlassCard>
				</BackdropGradient>
			</div>
		</div>
	);
};

export default AuthLayout;
