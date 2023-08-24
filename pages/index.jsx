import React from "react"
import Menu from "@/components/menu"

import Carrusel from "@/components/carrusel"
import Tarjeta1 from "@/components/tarjetas/tarjeta1"
import Banner from "@/components/banner"

import Link from "next/link"

export default function Home() {

  return (
    <Menu>

      <div className="grid sm:grid-cols-2 grid-cols-1">

        <Banner/>

        <Carrusel/>

      </div>

      <div className="w-full flex flex-col justify-center items-center mt-5 px-5">

        <Link href={`Productos/Destacados`} className="separador my-5" >
            <div className="flex flex-col justify-normal items-center">
              <h1 className="text-2xl">Destacados</h1>
              <p className="text-sm">(ver mas)</p>
            </div></Link>
        
        <Tarjeta1/>
          

          <Link href={`Productos/Destacados`} className="separador my-5" >
            <div className="flex flex-col justify-normal items-center">
              <h1 className="text-2xl">Exterior</h1>
              <p className="text-sm">(ver mas)</p>
            </div></Link>
        
        <Tarjeta1/>

      </div>



      
    </Menu>
  )
}
