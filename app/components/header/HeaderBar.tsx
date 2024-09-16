import Logo from "../logo/Logo"
import ThemeSwitcher from "../switcher/ThemeSwitcher"

export default function HeaderBar({ theme }: { theme?: string }) {
  return (
    <header className="h-[68px] flex items-center justify-center bg-primary text-[40px] fixed z-30 w-full">
      <Logo classNames="text-[40px]" />
      <ThemeSwitcher theme={theme} />
    </header>
  )
}
