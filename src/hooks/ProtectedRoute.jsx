import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({user, redirectTo, children }) => {
    console.log("usuario protegido", user)
    if(user == null) return <Navigate replace to={redirectTo} />
    return children ? children : <Outlet/>
}