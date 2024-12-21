import {create} from "zustand";
import { supabase } from "../supabase/supabase.config";
import { InsertarUsuario, MostrarUsuarios } from "../supabase/crudUsuario";

export const useUsuarioStore = create((set, get) =>({
    insertarUsuarioAdmin: async (p) => {
       const {data, error} = await supabase.auth.signUp({
            email: p.correo,
            password: p.password,
        }) 
        console.log("data del registro del usuario",data)
        if(error) return
        const datauser = await InsertarUsuario({idauth:data.user.id, fecharegistro: new Date(), correo: p.correo,tipouser: "admin"  })
        return datauser
    },
    idusuario:0,
    mostrarUsuarios: async () => {
        const response = await MostrarUsuarios()
        set({idusuario: response.id})
        return response
    }

}))