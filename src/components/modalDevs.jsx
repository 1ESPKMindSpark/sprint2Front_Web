
function ModalDevs({ aberto, fecharModal }) {
  if (!aberto) {
    return null
  }

  function fecharAoClicarFora(event) {
    if (event.target === event.currentTarget) {
      fecharModal()
    }
  }

  const desenvolvedores = [
    { nome: "Ana Giazzi", email: "anagazzio@smartStudy.com", rm: "569846" },
    { nome: "Erick", email: "erick@smartStudy.com", rm: "574064" },
    { nome: "Giulia Stella", email: "giuliastella@smartStudy.com", rm: "568888" },
    { nome: "Lucas Octaviano —  RM: 573368", email: "lucasoctaviano@smartStudy.com", rm: "573368" },
    { nome: "Rafael", email: "rafael@smartStudy.com", rm: "570738" },
  ]

  return (
    <section
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      onClick={fecharAoClicarFora}
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-modal"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-purple-500/30 bg-[#100c19] p-6 text-white shadow-2xl shadow-purple-950/40 sm:p-8">
        <button
          type="button"
          className="absolute right-4 top-3 flex h-9 w-9 items-center justify-center rounded-full text-3xl text-gray-400 transition hover:bg-white/10 hover:text-white"
          onClick={fecharModal}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <h2
          id="titulo-modal"
          className="mb-7 pr-10 text-2xl font-bold sm:text-3xl"
        >
          Desenvolvedores
        </h2>

        <div className="flex flex-col gap-3">
          {desenvolvedores.map((dev) => (
            <div
              key={dev.rm}
              className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-purple-400/40"
            >
              <p className="font-semibold text-purple-300">
                {dev.nome}
              </p>

              <p className="mt-1 break-all text-sm text-gray-300">
                {dev.email}
              </p>

              <p className="mt-1 text-xs text-gray-400">
                RM: {dev.rm}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModalDevs
