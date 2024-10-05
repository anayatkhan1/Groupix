"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useAuth, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [code, setCode] = useState("");
	const [successfulCreation, setSuccessfulCreation] = useState(false);
	const [secondFactor, setSecondFactor] = useState(false);
	const [error, setError] = useState("");

	const router = useRouter();
	const { isSignedIn } = useAuth();
	const { isLoaded, signIn, setActive } = useSignIn();

	if (!isLoaded) {
		return null;
	}

	if (isSignedIn) {
		router.push("/group/create");
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!successfulCreation) {
			await signIn
				?.create({
					strategy: "reset_password_email_code",
					identifier: email,
				})
				.then((_) => {
					setSuccessfulCreation(true);
					setError("");
				})
				.catch((err) => {
					console.error("error", err.errors[0].longMessage);
					setError(err.errors[0].longMessage);
				});
		} else {
			await signIn
				?.attemptFirstFactor({
					strategy: "reset_password_email_code",
					code,
					password,
				})
				.then((result) => {
					if (result.status === "needs_second_factor") {
						setSecondFactor(true);
						setError("");
					} else if (result.status === "complete") {
						setActive({ session: result.createdSessionId });
						setError("");
					} else {
						console.log(result);
					}
				})
				.catch((err) => {
					console.error("error", err.errors[0].longMessage);
					setError(err.errors[0].longMessage);
				});
		}
	};

	return (
		<Card className="mx-auto w-full max-w-md">
			<CardHeader>
				<CardTitle>Forgot Password</CardTitle>
				<CardDescription>
					Enter your email to reset your password
				</CardDescription>
			</CardHeader>
			<CardContent>
				{!successfulCreation ? (
					<form onSubmit={handleSubmit}>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							{error && <p>{error}</p>}
						</div>
					</form>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="password">New Password</Label>
								<Input
									id="password"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="code">Reset Code</Label>
								<Input
									id="code"
									type="text"
									value={code}
									onChange={(e) => setCode(e.target.value)}
									required
								/>
							</div>
							{error && <p>{error}</p>}
						</div>
					</form>
				)}
				{secondFactor && (
					<p>2FA is required, but this UI does not handle that</p>
				)}
			</CardContent>
			<CardFooter>
				{!successfulCreation ? (
					<Button className="w-full" onClick={handleSubmit}>
						Send password reset code
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				) : (
					<Button className="w-full" onClick={handleSubmit}>
						Reset Password
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
