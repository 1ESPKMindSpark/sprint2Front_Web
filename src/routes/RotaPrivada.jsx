
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function RotaPrivada() {
  const { usuario } = useAuth()

  return usuario ? <Outlet /> : <Navigate to="/login" replace />
}

export default RotaPrivada
