
import DicaEstudo from "./DicaEstudo"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

function Painel() {
  const { usuario, logout } = useAuth()
  const navigate = useNavigate()

  function sair() {
    logout()
    navigate("/login")
  }

  return (
    <main className="min-h-screen w-full bg-[#08060d] px-5 py-8 text-white sm:px-8 md:px-12">
      <header className="mx-auto mb-10 flex max-w-7xl items-center justify-between border-b border-white/10 pb-6">
        <h1 className="text-3xl font-extrabold text-purple-400">
          JOVI
          <span className="ml-2 text-base font-medium text-white">
            Smart Study
          </span>
        </h1>

        <button
          type="button"
          onClick={sair}
          className="rounded-lg border border-red-400/30 bg-red-500/10 px-5 py-2.5 text-sm font-semibold text-red-300 transition hover:bg-red-500 hover:text-white"
        >
          Sair
        </button>
      </header>

      <section className="mx-auto max-w-7xl rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-xl shadow-purple-950/10 sm:p-8 md:p-10">
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-purple-400">
            Área do estudante
          </p>

          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Olá, seja bem-vindo ao JOVI!
          </h2>

          <p className="text-sm text-gray-300 sm:text-base">
            Você está conectado como:{" "}
            <span className="font-semibold text-purple-300">
              {usuario?.email}
            </span>
          </p>
        </div>

        <div className="mb-8 rounded-xl border border-white/10 bg-black/20 p-5">
          <p className="leading-relaxed text-gray-300">
            Este é seu painel de estudos. Aqui você poderá acompanhar
            sua jornada de aprendizagem.
          </p>
        </div>

        <DicaEstudo />
      </section>
    </main>
  )
}

export default Painel
