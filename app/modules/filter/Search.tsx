'use client'

import { useState, KeyboardEvent } from "react"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import IconClose from "@/app/components/icons/IconClose"

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
      <div className="relative border border-grayLight max-w-[1000px] w-full rounded text-sm flex">
        <input
          className="w-full p-2 pr-8 rounded dark:bg-dark"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={checkEnterHandler}
          placeholder="Digite algo aqui.."
        />
        {searchValue && (
          <button onClick={() => setSearchValue('')} className="absolute right-0 p-1.5">
            <IconClose />
          </button>
        )}
      </div>
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