import Swal from "sweetalert2";
import { supabase } from "./supabase.config"
import { ObtenerIdAuthSupabase } from "./globalSupabase";

export const InsertarUsuario = async (p) => {
    const { data, error } = await supabase.from("usuarios").insert(p).select().maybeSingle();
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al insertar usuario!" + error.message
        });
    }
    if (data) return data
}

export const MostrarUsuarios = async () => {

    const idAutSupabase = await ObtenerIdAuthSupabase()
    const { data, error } = await supabase
        .from("usuarios")
        .select()
        .eq("idauth", idAutSupabase).maybeSingle()
    if (data) {
        return data
    } else {
        return error
    }
}