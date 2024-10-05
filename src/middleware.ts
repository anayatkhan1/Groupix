import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/group(.*)"]);

export default clerkMiddleware(async (auth, req) => {
	const baseHost = `${process.env.NEXT_PUBLIC_DOMAIN}`;
	const host = req.headers.get("host");
	const reqPath = req.nextUrl.pathname;
	const origin = req.nextUrl.origin;
	if (isProtectedRoute(req)) auth().protect();
	if (!baseHost.includes(host as string) && reqPath.includes("/group")) {
		const response = await fetch(`${origin}/api/domain?host=${host}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		// Check if the response is JSON
		const contentType = response.headers.get("content-type");
		if (contentType && contentType.includes("application/json")) {
			const data = await response.json();
			if (data.status === 200 && data) {
				return NextResponse.rewrite(
					new URL(reqPath, `https://${data.domain}/${reqPath}`),
				);
			}
		} else {
			console.error("Invalid response type:", contentType);
		}
	}
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
