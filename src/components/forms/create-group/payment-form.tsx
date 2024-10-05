"use client";

import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { usePayments } from "@/hooks/payment";
import { ErrorMessage } from "@hookform/error-message";
import { CardElement } from "@stripe/react-stripe-js";
import dynamic from "next/dynamic";
import Link from "next/link";

type Props = {
	userId: string;
	affiliate: boolean;
	stripeId?: string;
};

const GroupList = dynamic(
	() =>
		import("@/components/global/group-list-slider").then(
			(component) => component.GroupListSlider,
		),
	{
		ssr: false,
	},
);

const PaymentForm = ({ affiliate, userId, stripeId }: Props) => {
	const {
		onCreateGroup,
		isPending,
		register,
		errors,
		isCategory,
		creatingIntent,
	} = usePayments(userId, affiliate);

	return (
		<Loader loading={creatingIntent}>
			<form className="pt-5" onSubmit={onCreateGroup}>
				<GroupList
					selected={isCategory}
					register={register}
					label="Select Category"
					slidesOffsetBefore={28}
				/>
				<div className="mb-2 px-7">
					<ErrorMessage
						errors={errors}
						name={"category"}
						render={({ message }) => (
							<p className="text-red-400">
								{message === "Required" ? "" : message}
							</p>
						)}
					/>
				</div>
				<div className="px-7">
					<FormGenerator
						register={register}
						name="name"
						errors={errors}
						inputType="input"
						type="text"
						placeholder="Group Name"
					/>
				</div>
				<div className="my-3 px-7">
					<CardElement
						options={{
							style: {
								base: {
									fontSize: "16px",
									color: "#B4B0AE",
									"::placeholder": {
										color: "#B4B0AE",
									},
								},
							},
						}}
						className="rounded-lg border-[1px] border-themeGray bg-themeBlack p-3 outline-none"
					/>
				</div>
				<div className="flex flex-col gap-5 px-7">
					<p className="text-sm text-themeTextGray">
						Cancel anytime with 1-click. By clicking below, you accept
						our terms.
					</p>
					<Link className="text-sm text-themeTextGray" href={"/explore"}>
						Skip for now
					</Link>
					<Button
						variant="outline"
						type="submit"
						className="rounded-xl border-themeGray bg-themeBlack"
					>
						<Loader loading={isPending}>Get Started</Loader>
					</Button>
				</div>
			</form>
		</Loader>
	);
};

export default PaymentForm;
