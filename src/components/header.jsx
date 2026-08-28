function Header() {
  return (
    <header>
      <div className="conjunto-header">
        <h1 className="logo">
          JOVI <span>Smart Study</span>
        </h1>

        <nav>
          <ul className="menu-index">
            <li>
              <a href="#hero">Sobre</a>
            </li>

            <li>
              <a href="#funcionalidades">Funcionalidades</a>
            </li>

            <li>
              <a href="#como-funciona">Como funciona</a>
            </li>

            <li>
              <a href="#contato">Contato</a>
            </li>

            <li>
              <a href="#login">Login</a>
            </li>

            <li>
              <a href="#login" className="btn-testar">
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