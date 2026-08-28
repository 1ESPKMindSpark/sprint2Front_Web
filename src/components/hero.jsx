import brain from "../assets/ai_brain_neural.png"

function Hero() {
  const particulas = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    duration: `${5 + Math.random() * 5}s`,
    opacity: Math.random(),
  }))

  return (
    <section className="hero" id="hero">
      <div className="hero-conteudo">
        <p className="hero-novo">Novo na câmera Jovi</p>

        <h2>
          Estude mais inteligente.
          <br />
          Com a sua câmera.
        </h2>

        <p className="hero-testo">
          O JOVI Smart Study é uma solução inovadora que une Inteligência
          Artificial e visão computacional para transformar a rotina acadêmica.
          Desenvolvido para atuar como um assistente inteligente, otimizando o
          tempo de aprendizado.
        </p>

        <div className="hero-botoes">
          <a href="#contato" className="btn-aviso">
            Ser avisado no lançamento
          </a>
        </div>
      </div>

      <div className="hero-foto">
        <div className="particles">
          {particulas.map((particula) => (
            <span
              key={particula.id}
              style={{
                left: particula.left,
                animationDuration: particula.duration,
                opacity: particula.opacity,
              }}
            />
          ))}
        </div>

        <img
          src={brain}
          alt="Cérebro representando Inteligência Artificial"
          className="brain-image"
        />
      </div>
    </section>
  )
}

export default Hero