
import { useEffect, useState } from "react"

function DicaEstudo() {
  const [frase, setFrase] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  async function buscarFrase() {
    try {
      setCarregando(true)
      setErro(false)

      const resposta = await fetch("https://dummyjson.com/quotes/random")

      if (!resposta.ok) {
        throw new Error("Erro ao consultar API")
      }

      const dados = await resposta.json()
      setFrase(dados)
    } catch {
      setErro(true)
      setFrase(null)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    buscarFrase()
  }, [])

  return (
    <section className="mt-8 w-full rounded-2xl border border-purple-200 bg-purple-50 p-5 shadow-sm sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-purple-800 sm:text-2xl">
        Inspiração para estudar
      </h2>

      {carregando && (
        <p className="text-sm text-gray-600" role="status">
          Carregando inspiração...
        </p>
      )}

      {erro && (
        <div>
          <p className="text-sm text-red-700" role="alert">
            Não foi possível carregar a frase. Tente novamente.
          </p>
        </div>
      )}

      {frase && !carregando && (
        <div aria-live="polite">
          <p className="break-words text-base leading-relaxed text-gray-700 sm:text-lg">
            "{frase.quote}"
          </p>

          <p className="mt-3 font-semibold text-purple-700">
            — {frase.author}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={buscarFrase}
        disabled={carregando}
        className="mt-5 w-full rounded-lg bg-purple-700 px-5 py-3 font-semibold text-white transition hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {carregando ? "Carregando..." : "Nova inspiração"}
      </button>
    </section>
  )
}

export default DicaEstudo
