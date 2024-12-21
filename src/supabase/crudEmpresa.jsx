import { supabase } from "./supabase.config"


export const MostrarEmpresa = async ({p}) => {
    const { data, error } = await supabase
        .from("asignarempresa")
        .select(`empresa(id, nombre, simbolomoneda)`)
        .eq("id_usuario", p.idusuario)
        .maybeSingle()
    if (data) {
        return data
    } else {
        return error
    }
}

export const ContarUsuarioXEmpresa= async(p) => {
    const {data, error} = await supabase.rpc("contar", {_id_empresa: p.id_empresa})
    if (data) {
        return data
    }
}