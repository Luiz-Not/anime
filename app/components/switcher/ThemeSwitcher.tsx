'use client'

import Cookies from "js-cookie"
import { useState } from "react"

export default function ThemeSwitcher({ theme }: { theme?: string }) {
  const [checked, setChecked] = useState(theme === 'dark')

  const onChangeHandler = () => {
    if (!checked) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    Cookies.set('theme', !checked ? 'dark' : '')

    setChecked((prevState) => !prevState)
  }


  return (
    <div className="absolute right-[14px]">
      <input id="toggle" className="toggle" type="checkbox" checked={checked} onChange={() => onChangeHandler()} />
    </div>
  )
}
