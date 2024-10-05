import InfiniteScrollObserver from "@/components/global/infinite-scroll";
import { NoResult } from "@/components/global/search/no-results";
import { useGroupList } from "@/hooks/groups";
import GroupCard from "./group-card";
import PaginatedGroups from "./paginated-groups";

type Props = {
	category: string;
};

const GroupList = ({ category }: Props) => {
	const { groups, status } = useGroupList("groups");

	return (
		<div className="container mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{status === 200 ? (
				groups.map((group) => <GroupCard key={group.id} {...group} />)
			) : (
				<NoResult />
			)}
			{groups && groups.length > 5 && (
				<InfiniteScrollObserver
					action="GROUPS"
					identifier={category}
					paginate={groups.length}
				>
					<PaginatedGroups />
				</InfiniteScrollObserver>
			)}
		</div>
	);
};

export default GroupList;
