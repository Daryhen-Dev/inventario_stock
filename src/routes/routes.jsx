import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ProtectedRoute } from "../hooks/ProtectedRoute";
import { UserAuth } from "../context/AuthContext";
import { useUsuarioStore } from "../store/UsuarioStore";
import { useQuery } from "@tanstack/react-query";
import { SpinnerLoader } from "../components/molecule/SpinnerLoader";
import { ErrorMolecule } from "../components/molecule/ErrorMolecule";
import { useEmpresaStore } from "../store/EmpresaStore";
import { useEffect } from "react";
import { MostrarEmpresa } from "../supabase/crudEmpresa";



export function MyRountes() {
    const {user} = UserAuth()
 
    const { mostrarUsuarios, idusuario } = useUsuarioStore()
    const { mostrarEmpresas } = useEmpresaStore()
    const {data:dataUsuarios, isLoading, error } = useQuery({
                                        queryKey: ["mostrar usuarios"], 
                                        queryFn: mostrarUsuarios})
    const {data:dataempresa} = useQuery({queryKey: ["mostrar empresa"], queryFn:() => mostrarEmpresas({ p:{ idusuario: idusuario}}), enabled:!!dataUsuarios})
                                        
    if(isLoading) {return <SpinnerLoader/>}
    if(error) {return <ErrorMolecule mensaje={error?.message}/>}
    return (

        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
               <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}