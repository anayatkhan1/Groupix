import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

const CallBackPage = () => {
	return (
		<AuthenticateWithRedirectCallback
			signInForceRedirectUrl="/callback/sign-in"
			signUpForceRedirectUrl="/callback/complete"
		/>
	);
};

export default CallBackPage;
