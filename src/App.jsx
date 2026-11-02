
import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/header"
import Hero from "./components/hero"
import Funcionalidades from "./components/funcionalidades"
import ComoFunciona from "./components/comoFunciona"
import Contato from "./components/contato"
import ModalDevs from "./components/modalDevs"
import Cadastro from "./components/cadastro"
import Footer from "./components/footer"

import Login from "./components/login"
import Painel from "./components/painel"
import RotaPrivada from "./routes/RotaPrivada"

import "./App.css"

function App() {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <Routes>
      <Route
        path="/"
        element={
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
        }
      />

      <Route path="/login" element={<Login />} />

      <Route element={<RotaPrivada />}>
        <Route path="/painel" element={<Painel />} />
      </Route>
    </Routes>
  )
}

export default App
