import Swal from "sweetalert2";
import { supabase } from "./supabase.config";


export async function InsertMarca(p){
    const {error} = await supabase.rpc("insertmarca", p)
    if(error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
            footer: '<a href="">Agregue una nueva descripcion</a>',          
        })
    }
}

export async function MostrarMarca(p){
    const {data } = await supabase
    .from("marca")
    .select()
    .eq("id_empresa", p.id_empresa)
    .order("id", {ascending: true})
    return data;
}

export async function EliminarMarca(p){
    const {error } = await supabase
    .from("marca")
    .delete()
    .eq("id", p.id)
    if (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
            footer: '<a href="">Agregue una nueva descripcion</a>',          
        })
    }
}
export async function EditarMarca(p){
    const {error } = await supabase
    .from("marca")
    .update(p)
    .eq("id", p.id)
    if (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
            footer: '<a href="">Agregue una nueva descripcion</a>',          
        })
    }
}

export async function BuscarMarca(p) {
   const {data, error} = await supabase
   .from("marca")
   .select()
   .eq("id_empresa", p.id_empresa)
   .ilike("description", "%"+p.descripcion+"%") 
   if(error) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        footer: '<a href="">Agregue una nueva descripcion</a>',          
    })
   }
   return data;
}