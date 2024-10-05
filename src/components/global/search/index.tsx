"use client";

import { Input } from "@/components/ui/input";
import { useSearch } from "@/hooks/groups";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

type Props = {
	className?: string;
	inputStyle?: string;
	placeholder?: string;
	searchType: "GROUPS" | "POSTS";
	iconStyle?: string;
	glass?: boolean;
};

const Search = ({
	searchType,
	className,
	glass,
	iconStyle,
	inputStyle,
	placeholder,
}: Props) => {
	const { query, onSearchQuery } = useSearch(searchType);

	return (
		<div
			className={cn(
				"flex items-center gap-2 border-2",
				className,
				glass &&
					"backdrop--blur__safari bg-opacity-20 bg-clip-padding backdrop-blur-2xl backdrop-filter",
			)}
		>
			<SearchIcon className={cn(iconStyle || "text-themeTextGray")} />
			<Input
				onChange={onSearchQuery}
				value={query}
				className={cn("border-0 bg-transparent", inputStyle)}
				placeholder={placeholder}
				type="text"
			/>
		</div>
	);
};

export default Search;
