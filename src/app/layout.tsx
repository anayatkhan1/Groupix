import { ThemeProvider } from "@/components/theme";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/react-query/provider";
import { ReduxProvider } from "@/redux/provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./global.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "groupix",
	description:
		"Network with people from around the world, join groups, create your own, watch courses and become the best version of yourself.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body className={`${jakarta.className} bg-black`}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						disableTransitionOnChange
					>
						<ReduxProvider>
							<ReactQueryProvider>{children}</ReactQueryProvider>
						</ReduxProvider>
						<Toaster richColors position="top-right" />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
