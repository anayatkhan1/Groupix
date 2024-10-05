import { onGetStripeIntegration } from "@/actions/payments";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { INTEGRATION_LIST_ITEMS } from "@/constants/menus";

import Image from "next/image";
import IntegrationTrigger from "./_components/integration-trigger";

const IntegrationsPage = async ({
	params,
}: {
	params: { groupid: string };
}) => {
	const payment = await onGetStripeIntegration();
	const connections = {
		stripe: payment ? true : false,
	};
	return (
		<div className="grid h-0 flex-1 grid-cols-1 content-start gap-3 p-5 lg:grid-cols-3 xl:grid-cols-4">
			{INTEGRATION_LIST_ITEMS.map((item) => (
				<Card key={item.id} className="border-themeDarkGray bg-themeBlack">
					<CardContent className="flex flex-col gap-2 p-5">
						<div className="flex w-full items-start justify-between gap-x-20">
							<div className="">
								<div className="relative h-10 w-10">
									<Image
										src={`/stripe.png`}
										alt="Logo"
										width={60}
										height={60}
									/>
								</div>
								<h2 className="font-bold capitalize">{item.name}</h2>
							</div>
							<IntegrationTrigger
								connections={connections}
								title={item.title}
								descrioption={item.modalDescription}
								logo={item.logo}
								name={item.name}
								groupid={params.groupid}
							/>
						</div>
						<CardDescription>{item.description}</CardDescription>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default IntegrationsPage;
