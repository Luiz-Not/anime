import { Suspense } from "react";
import CardsWrapper from "./modules/cards/CardsWrapper";
import Filters from "./modules/filter/Filters"
import Search from "./modules/filter/Search";
import { CardsSkeleton } from "./components/card/CardsSkeleton";

export default async function Home({
  searchParams,
}: {
  searchParams: { filter?: string; search?: string }
}) {
  const { filter, search } = searchParams

  return (
    <div className="flex flex-col gap-6">
      <Filters activedFilter={filter} />
      <Search query={search} />
      <Suspense key={`${filter}${search}`} fallback={<CardsSkeleton />}>
        <CardsWrapper filter={filter} search={search} />
      </Suspense>
    </div>
  );
}
