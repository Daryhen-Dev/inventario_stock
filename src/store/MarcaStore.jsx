import { create } from "zustand";
import { BuscarMarca, EditarMarca, EliminarMarca, InsertMarca, MostrarMarca } from "../supabase/crudMarca";

export const useMarcaStore = create((set, get) => ({
    buscador: "",
    setBuscador: (p) => {set({buscador: p})},
    dataMarca: [],
    marcaItemSelect:[],
    parametros:{},
    mostrarMarca: async (p) => {
        const response = await MostrarMarca(p)
        set({parametros:p})
        set({dataMarca: response})
        set({marcaItemSelect: response[0]})
        return response
    },
    selectMarca: (p) => {
        set({marcaItemSelect: p})
    },
    insertMarca: async (p) => {
        await InsertMarca(p)
        const { mostrarMarca}= get()
        const {parametros}= get()
        set(mostrarMarca(parametros))
    },
    eliminarMarca: async (p) => {
        await EliminarMarca(p)
        const { mostrarMarca}= get()
        const {parametros}= get()
        set(mostrarMarca(parametros))
    },
    editMarca: async (p) => {
        await EditarMarca(p)
        const { mostrarMarca} = get()
        const {parametros}= get()
        set(mostrarMarca(parametros))
    },
    buscarMarca: async (p) => {
        const response = await BuscarMarca(p)
        set({dataMarca: response})
        return response
    }
}))