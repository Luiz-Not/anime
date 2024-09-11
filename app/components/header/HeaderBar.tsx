import Logo from "../logo/Logo"

export default function HeaderBar() {
  return (
    <header className="h-[68px] flex items-center justify-center bg-primary text-[40px] fixed z-30 w-full">
      <Logo classNames="text-[40px]" />
    </header>
  )
}
