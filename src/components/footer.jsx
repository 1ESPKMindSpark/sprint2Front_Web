
function Footer() {
  return (
    <footer className="w-full bg-[#08060d] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 md:grid-cols-3">

        <div className="text-center sm:text-left">
          <h3 className="mb-3 text-2xl font-bold">
            JOVI <span className="text-purple-400">Smart Study</span>
          </h3>

          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Transformando seus estudos com inteligência artificial
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="mb-4 text-lg font-semibold">Links</h4>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="#hero"
                className="transition hover:text-purple-400"
              >
                Início
              </a>
            </li>

            <li>
              <a
                href="#hero"
                className="transition hover:text-purple-400"
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#funcionalidades"
                className="transition hover:text-purple-400"
              >
                Funcionalidades
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="mb-4 text-lg font-semibold">
            Acompanhe nosso repositório
          </h4>

          <a
            href="https://github.com/1ESPKMindSpark/sprint2Front_Web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-purple-400 transition hover:text-purple-300 hover:underline"
          >
            Github: SmartStudy
          </a>
        </div>

      </div>

      <p className="pt-6 text-center text-xs text-gray-500 sm:text-sm">
        © 2026 JOVI Smart Study. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer
