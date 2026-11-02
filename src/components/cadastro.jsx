
import { useState } from "react"

function Cadastro() {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  function cadastrar(event) {
    event.preventDefault()

    if (!nome.trim() || !sobrenome.trim() || !email.trim() || !senha) {
      setMensagem("Preencha todos os campos do formulário!")
      return
    }

    if (!email.includes("@")) {
      setMensagem("E-mail inválido!")
      return
    }

    if (senha.length < 6) {
      setMensagem("Senha muito curta! Use pelo menos 6 caracteres.")
      return
    }

    const usuario = {
      nome,
      sobrenome,
      email,
    }

    localStorage.setItem("usuarioJovi", JSON.stringify(usuario))

    setMensagem(`Cadastro realizado com sucesso! Bem-vindo, ${nome}!`)

    setNome("")
    setSobrenome("")
    setEmail("")
    setSenha("")
  }

  return (
    <section
      id="login"
      className="w-full bg-[#08060d] px-5 py-16 sm:px-8 md:py-20"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Seja o primeiro a experimentar
          </h2>

          <p className="text-sm text-gray-300 sm:text-base">
            Cadastre-se para receber notificações sobre o lançamento
          </p>
        </div>

        <form
          onSubmit={cadastrar}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-sm font-medium text-white">
                Nome:
              </label>

              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="sobrenome"
                className="text-sm font-medium text-white"
              >
                Sobrenome:
              </label>

              <input
                type="text"
                id="sobrenome"
                placeholder="Digite seu sobrenome"
                value={sobrenome}
                onChange={(event) => setSobrenome(event.target.value)}
                className="w-full rounded-lg border border-gray-600 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              E-mail:
            </label>

            <input
              type="email"
              id="email"
              placeholder="seuemail@provedor.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="senha" className="text-sm font-medium text-white">
              Senha:
            </label>

            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha de 6 caracteres"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              className="w-full rounded-lg border border-gray-600 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
              minLength={6}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#08060d] sm:w-auto"
          >
            Acesso antecipado
          </button>

          {mensagem && (
            <p
              role="status"
              aria-live="polite"
              className="mt-4 text-sm text-white"
            >
              {mensagem}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Cadastro
