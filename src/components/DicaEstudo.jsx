
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
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    buscarFrase()
  }, [])

  return (
    <section className="mt-8 rounded-2xl bg-purple-50 p-6">
      <h2 className="mb-4 text-xl font-bold text-purple-800">
        Inspiração para estudar
      </h2>

      {carregando && <p>Carregando inspiração...</p>}

      {erro && (
        <p>Não foi possível carregar a frase. Tente novamente.</p>
      )}

      {frase && !carregando && (
        <>
          <p className="text-gray-700">"{frase.quote}"</p>
          <p className="mt-3 font-semibold text-purple-700">
            — {frase.author}
          </p>
        </>
      )}

      <button
        onClick={buscarFrase}
        className="mt-5 rounded-lg bg-purple-700 px-5 py-2 text-white hover:bg-purple-800"
      >
        Nova inspiração
      </button>
    </section>
  )
}

export default DicaEstudo
