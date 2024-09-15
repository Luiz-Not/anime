import { getAnimeList } from "@/app/lib/data"
import Cards from "./Cards"

export default async function CardsWrapper({ filter, search }: { filter?: string, search?: string }) {
  const { Page } = await getAnimeList(1, filter, search)

  return <Cards {...Page} />
}
