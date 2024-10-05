import { Navbar } from "./_components/navbar";

type ExploreLayoutProps = {
	children: React.ReactNode;
};

const DiscoverLayout = ({ children }: ExploreLayoutProps) => {
	return (
		<div className="flex min-h-screen flex-col bg-black pb-10">
			{/* @ts-ignore */}
			<Navbar />
			{children}
		</div>
	);
};

export default DiscoverLayout;
