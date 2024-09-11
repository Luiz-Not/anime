import Cards from "./modules/cards/Cards";
import Filters from "./modules/filter/Filters"
import Search from "./modules/filter/Search";

export default function Home({
  searchParams,
}: {
  searchParams: { filter?: string; search?: string }
}) {
  const { filter, search } = searchParams
  return (
    <div className="flex flex-col gap-6">
      <Filters activedFilter={filter} />
      <Search query={search} />
      <Cards />
    </div>
  );
}
