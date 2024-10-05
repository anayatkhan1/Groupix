"use client";

import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { GROUPLE_CONSTANTS } from "@/constants";
import { useAuthSignIn } from "@/hooks/authentication";

const SignInForm = () => {
	const { isPending, onAuthenticateUser, register, errors } = useAuthSignIn();

	return (
		<form className="mt-10 flex flex-col gap-3" onSubmit={onAuthenticateUser}>
			{GROUPLE_CONSTANTS.signInForm.map((field) => (
				<FormGenerator
					{...field}
					key={field.id}
					register={register}
					errors={errors}
				/>
			))}
			<Button type="submit" className="rounded-2xl">
				<Loader loading={isPending}>Sign In with Email</Loader>
			</Button>
		</form>
	);
};

export default SignInForm;
