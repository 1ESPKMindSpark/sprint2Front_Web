
import { useEffect, useState } from "react"

const passos = [
  {
    numero: "01",
    titulo: "Abra a câmera",
    texto: 'Toque em "Smart Study" na barra de modos da câmera Jovi.',
  },
  {
    numero: "02",
    titulo: "Escolha o modo",
    texto:
      "Selecione entre Digitalizar, Traduzir, Resumir, Quiz ou Resolver Math.",
  },
  {
    numero: "03",
    titulo: "Aponte e capture",
    texto:
      "Posicione o texto na moldura e pressione o botão. A IA processa em segundos.",
  },
]

const particulas = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${(index * 37 + 13) % 100}%`,
  duration: `${5 + (index % 5)}s`,
  opacity: 0.2 + (index % 7) / 10,
}))

function ComoFunciona() {
  const [passoAtual, setPassoAtual] = useState(0)

  function proximoPasso() {
    setPassoAtual((passo) => (passo + 1) % passos.length)
  }

  function passoAnterior() {
    setPassoAtual((passo) =>
      passo === 0 ? passos.length - 1 : passo - 1
    )
  }

  useEffect(() => {
    const intervalo = setInterval(proximoPasso, 4000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden bg-[#08060d] px-5 py-20 text-white sm:px-8 md:py-24"
      id="como-funciona"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {particulas.map((particula) => (
          <span
            key={particula.id}
            className="absolute bottom-0 h-1 w-1 rounded-full bg-purple-400 animate-pulse"
            style={{
              left: particula.left,
              animationDuration: particula.duration,
              opacity: particula.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Como Funciona
        </h2>

        <p className="mb-12 text-base text-gray-300 sm:text-lg">
          Três passos. Zero complicação.
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={passoAnterior}
            aria-label="Passo anterior"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-400 text-lg text-purple-300 transition hover:bg-purple-600 hover:text-white sm:h-12 sm:w-12"
          >
            ❮
          </button>

          <div
            className="flex min-h-64 w-full max-w-xl flex-col items-center justify-center rounded-2xl border border-purple-500/30 bg-white/5 px-5 py-10 shadow-lg shadow-purple-900/20 sm:px-10"
            aria-live="polite"
          >
            <span className="mb-5 text-4xl font-extrabold text-purple-400 sm:text-5xl">
              {passos[passoAtual].numero}
            </span>

            <h3 className="mb-4 text-xl font-bold sm:text-2xl">
              {passos[passoAtual].titulo}
            </h3>

            <p className="max-w-md text-sm leading-relaxed text-gray-300 sm:text-base">
              {passos[passoAtual].texto}
            </p>
          </div>

          <button
            type="button"
            onClick={proximoPasso}
            aria-label="Próximo passo"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-400 text-lg text-purple-300 transition hover:bg-purple-600 hover:text-white sm:h-12 sm:w-12"
          >
            ❯
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {passos.map((passo, index) => (
            <button
              key={passo.numero}
              type="button"
              onClick={() => setPassoAtual(index)}
              aria-label={`Ir para o passo ${passo.numero}`}
              aria-current={passoAtual === index ? "step" : undefined}
              className={`h-2.5 rounded-full transition-all ${
                passoAtual === index
                  ? "w-8 bg-purple-500"
                  : "w-2.5 bg-gray-600 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona
