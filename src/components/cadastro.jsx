import { useState } from "react"

function Cadastro() {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  function cadastrar(event) {
    event.preventDefault()

    if (!nome || !sobrenome || !email || !senha) {
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
    <section className="box-cadastro" id="login">
      <div className="cadastro-conteudo">
        <h2>Seja o primeiro a experimentar</h2>

        <p>
          Cadastre-se para receber notificações sobre o lançamento
        </p>

        <form onSubmit={cadastrar}>
          <div className="linha-form">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>

              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="sobrenome">Sobrenome:</label>

              <input
                type="text"
                id="sobrenome"
                placeholder="Digite seu sobrenome"
                value={sobrenome}
                onChange={(event) => setSobrenome(event.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>

            <input
              type="email"
              id="email"
              placeholder="seuemail@provedor.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>

            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha de 6 dígitos"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
          </div>

          <button type="submit" className="btn-submit">
            Acesso antecipado
          </button>

          {mensagem && (
            <p
              style={{
                marginTop: "15px",
                color: "white",
              }}
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