'use client'

import { useState, KeyboardEvent } from "react"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function Search({ query }: { query?: string }) {
  const [searchValue, setSearchValue] = useState(query || '')
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const searchHandler = () => {
    const params = new URLSearchParams(searchParams)

    if (searchValue) {
      params.set('search', searchValue)
    } else {
      params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  const checkEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchHandler()
    }
  }

  return (
    <div className="flex gap-2 w-full m-auto items-center justify-center">
      <input
        className="border border-grayLight max-w-[1000px] w-full rounded p-2 text-sm"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={checkEnterHandler}
        placeholder="Digite algo aqui.."
      />
      <button
        className="rounded bg-primary text-white py-3 px-[20px] leading-none text-sm"
        type="button"
        onClick={searchHandler}
      >
          Buscar
      </button>
    </div>
  )
}