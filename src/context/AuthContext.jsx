
import { createContext, useContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario, removerUsuario] =
    useLocalStorage("usuarioLogado", null)

  function login(email, senha) {
    if (email === "teste@jovi.com" && senha === "123456") {
      setUsuario({ email })
      return true
    }

    return false
  }

  function logout() {
    removerUsuario()
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
