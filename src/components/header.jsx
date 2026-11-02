
import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#08060d]/95 text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#hero" onClick={fecharMenu} className="shrink-0">
          <h1 className="text-xl font-extrabold sm:text-2xl">
            JOVI <span className="text-purple-400">Smart Study</span>
          </h1>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-2xl transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
        >
          {menuAberto ? "✕" : "☰"}
        </button>

        <nav
          id="menu-principal"
          className={`absolute left-0 top-full w-full border-b border-white/10 bg-[#08060d] px-5 py-5 md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 ${
            menuAberto ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-5 md:flex-row md:gap-6">
            <li>
              <a
                href="#hero"
                onClick={fecharMenu}
                className="text-sm transition hover:text-purple-400"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#funcionalidades"
                onClick={fecharMenu}
                className="text-sm transition hover:text-purple-400"
              >
                Funcionalidades
              </a>
            </li>

            <li>
              <a
                href="#como-funciona"
                onClick={fecharMenu}
                className="text-sm transition hover:text-purple-400"
              >
                Como funciona
              </a>
            </li>

            <li>
              <a
                href="#contato"
                onClick={fecharMenu}
                className="text-sm transition hover:text-purple-400"
              >
                Contato
              </a>
            </li>

            <li>
              <Link
                to="/login"
                onClick={fecharMenu}
                className="text-sm transition hover:text-purple-400"
              >
                Login
              </Link>
            </li>

            <li>
              <a
                href="#login"
                onClick={fecharMenu}
                className="rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
              >
                Quero testar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
