'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import { filters, filterButtonClassNames } from "./constants"

export default function Filters({ activedFilter = '' }: { activedFilter?: string }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const filterButtonHandler = (value: string) => {
    const params = new URLSearchParams(searchParams)

    if (value) {
      params.set('filter', value)
    } else {
      params.delete('filter')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  const FilterButton = ({ text, value, actived }: { text: string; value: string, actived: boolean }) => (
    <button
      type="button"
      className={`${filterButtonClassNames} ${actived ? 'text-white bg-primary' : ''}`}
      onClick={() => filterButtonHandler(value)}
    >
      {text}
    </button>
  )

  return (
    <div className="flex gap-4 items-center justify-center flex-wrap">
      {filters.map((filter) => <FilterButton actived={activedFilter === filter.value} key={filter.value} {...filter} />)}
    </div>
  )
}
