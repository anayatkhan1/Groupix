"use client";

import { Button } from "@/components/ui/button";
import { useGoogleAuth } from "@/hooks/authentication";
import { Google } from "@/icons";
import { Loader } from "../loader";

type GoogleAuthButtonProps = {
	method: "signup" | "signin";
};

export const GoogleAuthButton = ({ method }: GoogleAuthButtonProps) => {
	const { signUpWith, signInWith } = useGoogleAuth();
	return (
		<Button
			{...(method === "signin"
				? {
						onClick: () => signInWith("oauth_google"),
					}
				: {
						onClick: () => signUpWith("oauth_google"),
					})}
			className="flex w-full gap-3 rounded-2xl border-themeGray bg-themeBlack"
			variant="outline"
		>
			<Loader loading={false}>
				<Google />
				Google
			</Loader>
		</Button>
	);
};
