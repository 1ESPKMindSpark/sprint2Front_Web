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
    <main className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 md:p-8">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-purple-700">
          JOVI
        </h1>

        <button
          onClick={sair}
          className="rounded-lg bg-red-500 px-5 py-2 text-white"
        >
          Sair
        </button>
      </header>

      <section className="rounded-xl bg-white p-5 shadow sm:p-8">
        <h2 className="text-2xl font-bold mb-3">
          Olá, seja bem-vindo ao JOVI!
        </h2>

        <p className="text-gray-600">
          Você está conectado como: {usuario?.email}
        </p>

        <p className="mt-6">
          Este é seu painel de estudos. Aqui você poderá acompanhar
          sua jornada de aprendizagem.
        </p>
        <DicaEstudo />
      </section>
    </main>
  )
}

export default Painel
