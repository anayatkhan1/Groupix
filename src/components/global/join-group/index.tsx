"use client";

import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { useJoinGroup } from "@/hooks/payment";

import { CardElement } from "@stripe/react-stripe-js";

type JoinGroupPaymentFormProps = {
	groupid: string;
};

export const JoinGroupPaymentForm = ({
	groupid,
}: JoinGroupPaymentFormProps) => {
	const { isPending, onPayToJoin } = useJoinGroup(groupid);
	return (
		<div className="flex flex-col gap-y-3">
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
			<Button onClick={onPayToJoin}>
				<Loader loading={isPending}>Pay Now</Loader>
			</Button>
		</div>
	);
};
