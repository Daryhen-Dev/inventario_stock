import { HomeTemplate } from "../components/template/HomeTemplate"
import { useEmpresaStore } from "../store/EmpresaStore"
import { useQuery } from "@tanstack/react-query"


export const Home = () => {
    const { contarUsuarioXEmpresa, dataempresa } = useEmpresaStore()
    const { data } = useQuery({
        queryKey: ["contar usuarios por empresa",
            { id_empresa: dataempresa.empresa?.id }], queryFn: () => contarUsuarioXEmpresa({ id_empresa: dataempresa.empresa?.id }), enabled: !!dataempresa
    })

    return (
            <HomeTemplate />
    )
}
