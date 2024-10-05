import dynamic from "next/dynamic";
import CallToAction from "./_components/call-to-action";
import DashboardSnippet from "./_components/dashboard-snippet";

const PricingSection = dynamic(
	() =>
		import("./_components/pricing").then(
			(component) => component.PricingSection,
		),
	{ ssr: true },
);

export default function Home() {
	return (
		<main className="flex flex-col gap-36 py-20 md:px-10">
			<div>
				<CallToAction />
				<DashboardSnippet />
			</div>
			<PricingSection />
		</main>
	);
}
