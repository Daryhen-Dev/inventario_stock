import {create } from "zustand"
import { supabase } from "../supabase/supabase.config"

export const useAuthStore= create((set, get) => ({
    signInWithEmail: async (p)=> {
            const { data, error} = await supabase.auth.signInWithPassword(
                {
                        email: p.correo,
                        password: p.password
                }
            )
            if (error) {
                console.log(error)
                return null
            } else {
                return data.user
            }
    },
    signOut: async ()=> {
        const {error} = await supabase.auth.signOut()
        if (error) {
            throw new Error("A ocurrido un error durante el cierre de sesión"+ error)
        }
    }
    
}))