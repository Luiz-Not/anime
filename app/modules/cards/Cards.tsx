'use client'

import Card from "@/app/components/card/Card"
import IconPlus from "@/app/components/icons/IconPlus"
import { getAnimeList } from "@/app/lib/data"
import { useSearchParams } from "next/navigation"
import { useState, useRef } from "react"

export default function Cards({ media, pageInfo }: {
  media: {
    id: number
    title: { english: string, romaji: string }
    averageScore: number
    genres: string[]
    coverImage: {
      extraLarge: string
    }
  }[]
  pageInfo: {
    hasNextPage: boolean
  }
}) {
  const [cards, setCards] = useState(media)
  const [hasNextPage, setHasNextPage] = useState(pageInfo.hasNextPage)
  const [, setLoading] = useState(false)
  const pageRef = useRef(1)
  const loadingRef = useRef(false)
  const searchParams = useSearchParams()

  const loadNextPage = async () => {
    if (loadingRef.current) {
      return
    }

    try {
      loadingRef.current = true
      setLoading(true)

      const { Page } = await getAnimeList(
        pageRef.current + 1,
        searchParams.get('filter') || undefined,
        searchParams.get('search') || undefined
      )

      const { media, pageInfo } = Page

      pageRef.current = pageRef.current + 1
      setCards((prevItens) => [...prevItens, ...media])
      setHasNextPage(pageInfo.hasNextPage)

    } catch {
      // captureException('Cards load next page error', {
      //   originalException: e,
      // })
    } finally {
      loadingRef.current = false
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-[1318px] m-auto">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card) => <Card key={card.id} {...card} />)}
      </div>

      {cards.length === 0 && (
        <div className="text-lg">
          Nenhum resultado encontrado!
        </div>
      )}

      {hasNextPage && (
        <button
          className="bg-yellow text-white w-full rounded-lg p-2.5 text-xl flex items-center justify-center"
          onClick={loadNextPage}
        >
          {!loadingRef.current && <IconPlus />}
          {!loadingRef.current ? 'Ver mais' : 'carregando...'}
        </button>
      )}
    </div>
  )
}
