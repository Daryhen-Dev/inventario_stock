import {create} from "zustand";

import { ContarUsuarioXEmpresa, MostrarEmpresa } from "../supabase/crudEmpresa";

export const useEmpresaStore = create((set, get) =>({
    contadorUsuario:0,
    dataempresa:[],
     mostrarEmpresas: async (p) => {
        const response = await MostrarEmpresa(p)
        set({dataempresa: response})
        return response
    },
     contarUsuarioXEmpresa: async (p) => {
        const response = await ContarUsuarioXEmpresa(p) 
        set({contadorUsuario: response})
        return response
    }
}))