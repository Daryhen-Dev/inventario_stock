import { useQuery } from "@tanstack/react-query"
import { MarcaTemplate } from "../components/template/MarcaTemplate"
import { useMarcaStore } from "../store/MarcaStore"
import { useEmpresaStore } from "../store/EmpresaStore"
import { SpinnerLoader } from "../components/molecule/SpinnerLoader"

export const Marca = () => {
    const {mostrarMarca, dataMarca, buscarMarca, buscador} = useMarcaStore()
    const {dataempresa} = useEmpresaStore()
    const {isLoading, error} = useQuery({
        queryKey: ["mostrar marca", {id_empresa: dataempresa?.id}], 
        queryFn: () =>mostrarMarca({id_empresa: dataempresa?.id}), enabled:dataempresa?.id!=null})
    const { data: buscarData } = useQuery({
            queryKey: ["buscar marca", {id_empresa: dataempresa.id, descripcion: buscador}], 
            queryFn: () =>buscarMarca({id_empresa: dataempresa.id, descripcion: buscador}), 
            enabled: dataempresa.id!=null})

     if(isLoading) return <SpinnerLoader/>
     if(error) return <div>{error.message}</div>
    return (
         <MarcaTemplate data={dataMarca} />
    )
}
