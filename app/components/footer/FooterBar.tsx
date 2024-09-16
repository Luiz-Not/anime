import Logo from "../logo/Logo"

export default function FooterBar() {
  return (
    <footer className="h-[54px] flex flex-col items-center justify-center bg-primary py-2">
      <Logo classNames="text-[24px] leading-[30px]" />
      <div className="text-[10px] text-white">TODOS OS DIREITOS RESERVADOS</div>
    </footer>
  )
}
