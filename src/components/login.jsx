
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    const conseguiuEntrar = login(email, senha)

    if (conseguiuEntrar) {
      navigate("/painel")
    } else {
      setErro("E-mail ou senha incorretos.")
    }
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#08060d] px-5 py-12 text-white">
      <section className="w-full max-w-md rounded-2xl border border-purple-500/20 bg-white/5 p-7 shadow-2xl shadow-purple-950/20 sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-extrabold sm:text-4xl">
            Entrar no <span className="text-purple-400">JOVI</span>
          </h1>

          <p className="text-gray-300">
            Acesse sua área de estudos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setErro("")
              }}
              required
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Senha
            </label>

            <input
              id="senha"
              type="password"
              placeholder="Sua senha"
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value)
                setErro("")
              }}
              required
              className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          {erro && (
            <p
              role="alert"
              className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {erro}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#08060d]"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm text-purple-300 transition hover:text-purple-200 hover:underline"
          >
            Voltar para o início
          </Link>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-black/20 p-4 text-center">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Acesso de demonstração
          </p>

          <p className="text-sm text-gray-300">
            teste@jovi.com / 123456
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login
