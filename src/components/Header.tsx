interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#inicio" className="text-lg font-bold text-blue-900 md:text-xl" aria-label="Voltar ao início">
          Dra. Mariangel
        </a>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700 md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded px-2 py-1 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
