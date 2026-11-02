
import brain from "../assets/ai_brain_neural.png"

function Hero() {
  const particulas = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    duration: `${5 + Math.random() * 5}s`,
    delay: `${Math.random() * 5}s`,
    opacity: 0.3 + Math.random() * 0.7,
    size: `${3 + Math.random() * 5}px`,
  }))

  return (
    <section
      id="hero"
      className="relative flex min-h-[650px] w-full flex-col items-center justify-center gap-12 overflow-hidden bg-[#08060d] px-5 py-20 text-white md:min-h-[750px] md:flex-row md:px-10 lg:px-20"
    >
      <div className="relative z-10 w-full max-w-2xl text-center md:text-left">
        <p className="mb-6 inline-block rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300">
          Novo na câmera Jovi
        </p>

        <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Estude mais inteligente.
          <br />
          Com a sua câmera.
        </h2>

        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:mx-0">
          O JOVI Smart Study é uma solução inovadora que une Inteligência
          Artificial e visão computacional para transformar a rotina acadêmica.
          Desenvolvido para atuar como um assistente inteligente, otimizando o
          tempo de aprendizado.
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="#contato"
            className="inline-flex rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-1 hover:bg-purple-700 sm:text-base"
          >
            Ser avisado no lançamento
          </a>
        </div>
      </div>

      <div className="relative flex min-h-[300px] w-full max-w-xl items-center justify-center md:min-h-[450px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particulas.map((particula) => (
            <span
              key={particula.id}
              className="particula-flutuante absolute bottom-0 rounded-full bg-purple-400"
              style={{
                left: particula.left,
                width: particula.size,
                height: particula.size,
                animationDuration: particula.duration,
                animationDelay: particula.delay,
                opacity: particula.opacity,
              }}
            />
          ))}
        </div>

        <img
          src={brain}
          alt="Cérebro representando Inteligência Artificial"
          className="relative z-10 w-full max-w-[420px] object-contain drop-shadow-[0_0_35px_rgba(168,85,247,0.25)]"
        />
      </div>
    </section>
  )
}

export default Hero
