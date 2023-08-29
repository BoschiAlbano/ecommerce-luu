import React from "react"
import Menu from "@/components/menu"
import Carrusel from "@/components/carrusel"
import Tarjeta1 from "@/components/tarjetas/tarjeta1"
import Link from "next/link"

export default function Home() {

  return (
    <Menu>

      <div className="sm:mt-5 sm:px-5 sm:h-[60%] h-[50%]">
        <Carrusel/>
      </div>

      <div className="w-full flex flex-col justify-center items-center sm:mt-5 sm:px-5">

        <Link href={`Productos/Destacados`} className="separador before:sm:mx-8 after:sm:mx-8 before:mx-2 after:mx-2 my-10" >
            <div className="flex flex-col justify-normal items-center">
              <h1 className="text-2xl">Destacados</h1>
              <p className="text-sm">(ver mas)</p>
            </div></Link>
        
        <Tarjeta1/>
          

          <Link href={`Productos/Destacados`} className="separador before:sm:mx-8 after:sm:mx-8 before:mx-2 after:mx-2 my-10" >
            <div className="flex flex-col justify-normal items-center">
              <h1 className="text-2xl">Exterior</h1>
              <p className="text-sm">(ver mas)</p>
            </div></Link>
        
        <Tarjeta1/>

      </div>



      
    </Menu>
  )
}
