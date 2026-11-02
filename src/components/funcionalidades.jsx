
import digitalizar from "../assets/digitalizar.png"
import traduzir from "../assets/traduzir.png"
import resumir from "../assets/resumir.png"
import quiz from "../assets/quiz.png"
import math from "../assets/math.png"

const funcionalidades = [
  {
    imagem: digitalizar,
    titulo: "Digitalizar texto",
    texto:
      "Extrai texto de livros, cadernos e apostilas com OCR de alta precisão.",
  },
  {
    imagem: traduzir,
    titulo: "Traduzir",
    texto:
      "Aponte para qualquer texto em outro idioma e receba a tradução na hora.",
  },
  {
    imagem: resumir,
    titulo: "Resumir",
    texto:
      "A IA gera resumos inteligentes destacando os pontos principais.",
  },
  {
    imagem: quiz,
    titulo: "Quiz",
    texto:
      "Transforma qualquer texto em perguntas para fixar o conteúdo.",
  },
  {
    imagem: math,
    titulo: "Resolver Math",
    texto:
      "Fotografe equações e receba a solução passo a passo explicada.",
  },
]

function Funcionalidades() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#08060d] px-5 py-16 text-white sm:px-8 md:py-24"
      id="funcionalidades"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-5 text-3xl font-bold sm:text-4xl md:text-5xl">
            Funcionalidades
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
            O Smart Study transforma sua câmera numa ferramenta de estudo
            completa: digitaliza, traduz, resume, cria quizzes e resolve
            equações em segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {funcionalidades.map((funcionalidade) => (
            <article
              className="flex flex-col rounded-2xl border border-purple-500/20 bg-white/5 p-6 shadow-lg shadow-purple-950/10 transition duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-white/10"
              key={funcionalidade.titulo}
            >
              <div className="mb-5 flex items-center gap-4">
                <img
                  src={funcionalidade.imagem}
                  alt=""
                  className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
                />

                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {funcionalidade.titulo}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                {funcionalidade.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Funcionalidades
