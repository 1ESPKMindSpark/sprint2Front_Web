function Footer() {
  return (
    <footer>
      <div className="footerconteudo">
        <div className="info">
          <h3>
            JOVI <span>Smart Study</span>
          </h3>

          <p>
            Transformando seus estudos com inteligência artificial
          </p>
        </div>

        <div className="footer-links">
          <h4>Links</h4>

          <ul>
            <li>
              <a href="#hero">Início</a>
            </li>

            <li>
              <a href="#hero">Sobre</a>
            </li>

            <li>
              <a href="#funcionalidades">Funcionalidades</a>
            </li>
          </ul>
        </div>

        <div className="redes">
          <h4>Acompanhe nosso repositório</h4>

          <a
            href="https://github.com/GiuliaStella/sprint2Front#"
            target="_blank"
            rel="noreferrer"
          >
            <span>Github: SmartStudy</span>
          </a>
        </div>
      </div>

      <p className="copyright">
        © 2026 JOVI Smart Study. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer