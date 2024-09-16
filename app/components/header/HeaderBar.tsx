import Logo from "../logo/Logo"
import ThemeSwitcher from "../../modules/switcher/ThemeSwitcher"

export default function HeaderBar({ theme }: { theme?: string }) {
  return (
    <header className="h-[68px] flex items-center sm:justify-center bg-primary text-[40px] fixed z-30 w-full px-[14px]">
      <Logo classNames="text-[40px]" />
      <ThemeSwitcher theme={theme} />
    </header>
  )
}
