import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage } from "@hookform/error-message";
import type {
	FieldErrors,
	FieldValues,
	UseFormRegister,
} from "react-hook-form";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

type FormGeneratorProps = {
	type?: "text" | "email" | "password" | "number";
	inputType: "select" | "input" | "textarea";
	options?: { value: string; label: string; id: string }[];
	label?: string;
	placeholder: string;
	register: UseFormRegister<any>;
	name: string;
	errors: FieldErrors<FieldValues>;
	lines?: number;
};

export const FormGenerator = ({
	inputType,
	options,
	label,
	placeholder,
	register,
	name,
	errors,
	type,
	lines,
}: FormGeneratorProps) => {
	switch (inputType) {
		case "input":
			return (
				<Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
					{label && label}
					<Input
						id={`input-${name}`}
						type={type}
						placeholder={placeholder}
						className="border-themeGray bg-themeBlack text-themeTextGray"
						{...register(name)}
					/>
					<ErrorMessage
						errors={errors}
						name={name}
						render={({ message }) => (
							<p className="mt-2 text-red-400">
								{message === "Required" ? "" : message}
							</p>
						)}
					/>
				</Label>
			);
		case "select":
			return (
				<Label htmlFor={`select-${label}`} className="flex flex-col gap-2">
					{label && label}
					<select
						id={`select-${label}`}
						className="w-full rounded-lg border-[1px] bg-transparent p-3"
						{...register(name)}
					>
						{options?.length &&
							options.map((option) => (
								<option
									value={option.value}
									key={option.id}
									className="dark:bg-muted"
								>
									{option.label}
								</option>
							))}
					</select>
					<ErrorMessage
						errors={errors}
						name={name}
						render={({ message }) => (
							<p className="mt-2 text-red-400">
								{message === "Required" ? "" : message}
							</p>
						)}
					/>
				</Label>
			);
		case "textarea":
			return (
				<Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
					{label && label}
					<Textarea
						className="border-themeGray bg-themeBlack text-themeTextGray"
						id={`input-${label}`}
						placeholder={placeholder}
						{...register(name)}
						rows={lines}
					/>
					<ErrorMessage
						errors={errors}
						name={name}
						render={({ message }) => (
							<p className="mt-2 text-red-400">
								{message === "Required" ? "" : message}
							</p>
						)}
					/>
				</Label>
			);
		default:
			return <></>;
	}
};
