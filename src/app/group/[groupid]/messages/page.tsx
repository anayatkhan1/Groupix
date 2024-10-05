import { Empty } from "@/icons";

const GroupMessagesPage = async () => {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-y-3">
			<Empty />
			<p className="text-themeTextGray">No chat selected</p>
		</div>
	);
};

export default GroupMessagesPage;
