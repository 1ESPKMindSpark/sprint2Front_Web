import { useState } from "react"

import Header from "./components/header"
import Hero from "./components/hero"
import Funcionalidades from "./components/funcionalidades"
import ComoFunciona from "./components/comoFunciona"
import Contato from "./components/contato"
import ModalDevs from "./components/modalDevs"
import Cadastro from "./components/cadastro"
import Footer from "./components/footer"

import "./App.css"

function App() {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <Header />

      <main>
        <Hero />

        <Funcionalidades />

        <ComoFunciona />

        <Contato abrirModal={() => setModalAberto(true)} />

        <ModalDevs
          aberto={modalAberto}
          fecharModal={() => setModalAberto(false)}
        />

        <Cadastro />
      </main>

      <Footer />
    </>
  )
}

export default App