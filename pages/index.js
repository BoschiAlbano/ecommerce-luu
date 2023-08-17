import { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { supabase } from "@/supabase/cliente";

export default function Home() {

  const navigation = useRouter();

  useEffect(() => {

    supabase.auth.onAuthStateChange(async (event, session) => {
        if (!session) {
            navigation.push("/login")
        }
    })

  }, []);


  async function sigOutUser(){
    const { error } = await supabase.auth.signOut();
    //navigation.push("/login")
  }

  return (
    <div className="w-full h-screen grid grid-cols-1 place-items-center">
      <p>Home</p>
      <button className="border-[3px] rounded border-amber-400" onClick={() => sigOutUser()}>Cerrar Sesion</button>
    </div>
  )
}
