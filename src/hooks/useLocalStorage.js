
import { useState } from "react"

export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const salvo = localStorage.getItem(chave)
      return salvo !== null ? JSON.parse(salvo) : valorInicial
    } catch {
      return valorInicial
    }
  })

  function atualizarValor(novoValor) {
    setValor((anterior) => {
      const atualizado =
        typeof novoValor === "function" ? novoValor(anterior) : novoValor

      localStorage.setItem(chave, JSON.stringify(atualizado))
      return atualizado
    })
  }

  function removerValor() {
    localStorage.removeItem(chave)
    setValor(valorInicial)
  }

  return [valor, atualizarValor, removerValor]
}
