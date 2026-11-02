import { useEffect, useState } from "react"

function ComoFunciona() {
  const [passoAtual, setPassoAtual] = useState(0)

  const passos = [
    {
      numero: "01",
      titulo: "Abra a câmera",
      texto:
        'Toque em "Smart Study" na barra de modos da câmera Jovi.',
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

  function proximoPasso() {
    setPassoAtual((passo) => (passo + 1) % passos.length)
  }

  function passoAnterior() {
    setPassoAtual((passo) =>
      passo === 0 ? passos.length - 1 : passo - 1
    )
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      setPassoAtual((passo) => (passo + 1) % passos.length)
    }, 4000)

    return () => clearInterval(intervalo)
  }, [passos.length])

  return (
    <section className="como-funciona" id="como-funciona">
      <div className="particles">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <h2>Como Funciona</h2>

      <p className="como-funciona-texto">
        Três passos. Zero complicação.
      </p>

      <div className="slideshow-passos">
        <button
          className="prev-passo"
          onClick={passoAnterior}
          aria-label="Passo anterior"
        >
          ❮
        </button>

        <div className="passos">
          <div className="passo slide-passo ativo-passo">
            <span className="passo-num">
              {passos[passoAtual].numero}
            </span>

            <h3>{passos[passoAtual].titulo}</h3>

            <p>{passos[passoAtual].texto}</p>
          </div>
        </div>

        <button
          className="next-passo"
          onClick={proximoPasso}
          aria-label="Próximo passo"
        >
          ❯
        </button>
      </div>
    </section>
  )
}

export default ComoFunciona