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
    <main className="login-container">
      <h1>Entrar no JOVI</h1>
      <p>Acesse sua área de estudos.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        />

        {erro && <p role="alert">{erro}</p>}

        <button type="submit">Entrar</button>
      </form>

      <Link to="/">Voltar para o início</Link>

      <p>
        Acesso de demonstração: teste@jovi.com / 123456
      </p>
    </main>
  )
}

export default Login
