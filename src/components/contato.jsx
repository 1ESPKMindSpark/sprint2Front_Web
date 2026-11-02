function Contato({ abrirModal }) {
  return (
    <section id="contato">
      <div className="contato-container">
        <h2>Contate-nos para saber mais</h2>

        <p>
          Estamos em constante evolução. O <strong>JOVI Smart Study</strong> é
          um projeto desenvolvido por estudantes apaixonados por tecnologia e
          inovação acadêmica. Tem alguma sugestão, crítica ou gostaria de
          colaborar? Nossa equipe de desenvolvedores está pronta para ouvir
          você.
        </p>

        <button id="abrirdevs" onClick={abrirModal}>
          Contato
        </button>
      </div>
    </section>
  )
}

export default Contato