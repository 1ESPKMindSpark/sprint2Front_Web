import digitalizar from "../assets/digitalizar.png"
import traduzir from "../assets/traduzir.png"
import resumir from "../assets/resumir.png"
import quiz from "../assets/quiz.png"
import math from "../assets/math.png"

function Funcionalidades() {
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

  return (
    <section className="funcionalidades" id="funcionalidades">
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

      <h2>Funcionalidades</h2>

      <p className="texto-funcionalidades">
        O Smart Study transforma sua câmera numa ferramenta de estudo completa
        <br />
        digitaliza, traduz, resume, cria quizzes e resolve equações em segundos.
      </p>

      <div className="cards">
        {funcionalidades.map((funcionalidade) => (
          <div className="card" key={funcionalidade.titulo}>
            <div className="card-cabecalho">
              <img
                src={funcionalidade.imagem}
                alt={funcionalidade.titulo}
                className="icon"
              />

              <h3>{funcionalidade.titulo}</h3>
            </div>

            <p>{funcionalidade.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Funcionalidades