
function Contato({ abrirModal }) {
  return (
    <section
      id="contato"
      className="w-full bg-[#100b19] px-5 py-16 text-white sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
          Contate-nos para saber mais
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
          Estamos em constante evolução. O{" "}
          <strong className="font-semibold text-white">
            JOVI Smart Study
          </strong>{" "}
          é um projeto desenvolvido por estudantes apaixonados por tecnologia
          e inovação acadêmica. Tem alguma sugestão, crítica ou gostaria de
          colaborar? Nossa equipe de desenvolvedores está pronta para ouvir
          você.
        </p>

        <button
          id="abrirdevs"
          type="button"
          onClick={abrirModal}
          className="rounded-lg bg-purple-600 px-10 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-purple-700 hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#100b19]"
        >
          Contato
        </button>
      </div>
    </section>
  )
}

export default Contato
