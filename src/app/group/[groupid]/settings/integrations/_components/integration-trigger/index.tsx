import { SimpleModal } from "@/components/global/simple-modal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2Icon, CloudIcon } from "lucide-react";
import { StripeConnect } from "../connect";

type Props = {
	name: "stripe";
	logo: string;
	title: string;
	descrioption: string;
	groupid: string;
	connections: {
		[key in "stripe"]: boolean;
	};
};

const IntegrationTrigger = ({
	name,
	logo,
	title,
	descrioption,
	connections,
	groupid,
}: Props) => {
	return (
		<SimpleModal
			title={title}
			type="Integration"
			logo={logo}
			description={descrioption}
			trigger={
				<Card className="flex cursor-pointer gap-2 border-themeGray bg-themeBlack px-3 py-2">
					<CloudIcon />
					{connections[name] ? "connected" : "connect"}
				</Card>
			}
		>
			<Separator orientation="horizontal" />
			<div className="flex flex-col gap-2">
				<h2 className="font-bold">Stripe would like to access</h2>
				{[
					"Payment and bank information",
					"Products and services you sell",
					"Business and tax information",
					"Create and update Products",
				].map((item, key) => (
					<div key={key} className="flex items-center gap-2 pl-3">
						<CheckCircle2Icon />
						<p>{item}</p>
					</div>
				))}
				<div className="mt-10 flex justify-between">
					<Button
						variant="outline"
						className="border-themeDarkGray bg-themeBlack"
					>
						Learn more
					</Button>
					<StripeConnect connected={connections["stripe"]} groupid={groupid} />
				</div>
			</div>
		</SimpleModal>
	);
};

export default IntegrationTrigger;
