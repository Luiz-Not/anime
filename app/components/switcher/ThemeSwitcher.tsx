'use client'

import { toggleTheme } from "@/app/lib/actions"
import { useState } from "react"

export default function ThemeSwitcher({ theme }: { theme?: string }) {
  const [checked, setChecked] = useState(theme === 'dark')

  console.log(checked)

  const onChangeHandler = () => {
    document.getElementsByTagName('html')[0].classList.toggle('dark')
    toggleTheme(!checked ? 'dark' : 'light')
    setChecked((prevState) => !prevState)
  }


  return (
    <div className="absolute right-[14px]">
      <input id="toggle" className="toggle" type="checkbox" checked={checked} onChange={() => onChangeHandler()} />
    </div>
  )
}
