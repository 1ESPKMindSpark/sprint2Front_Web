function ModalDevs({ aberto, fecharModal }) {
  if (!aberto) {
    return null
  }

  function fecharAoClicarFora(event) {
    if (event.target === event.currentTarget) {
      fecharModal()
    }
  }

  return (
    <section
      className="janela-modal visivel"
      onClick={fecharAoClicarFora}
    >
      <div className="conteudo-modal">
        <button
          className="btn-fechar"
          onClick={fecharModal}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <h2>Desenvolvedores</h2>

        <div className="lista-devs">
          <p>Ana Giazzi | anagazzio@smartStudy.com | RM: 569846</p>
          <p>Erick | erick@smartStudy.com | RM: 574064</p>
          <p>Giulia Stella | giuliastella@smartStudy.com | RM: 568888</p>
          <p>Julia Lopes | juliacamelo@smartStudy.com | RM: 574139</p>
          <p>Rafael | rafael@smartStudy.com | RM: 570738</p>
        </div>
      </div>
    </section>
  )
}

export default ModalDevs