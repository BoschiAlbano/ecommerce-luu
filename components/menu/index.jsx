import React from 'react';
import { useEffect, useState } from "react"
import { supabase } from "@/supabase/cliente";
import { useRouter } from 'next/router';
import Categorias from './categorias';

import Link from 'next/link';

import Planta3 from '../plantas/planta3';
import Planta1 from '../plantas/planta1';
import Planta2 from '../plantas/planta2';

import Lupa from '@mui/icons-material/Search';

const Menu = ({ children }) => {

    const navigation = useRouter();

    useEffect(() => {

        supabase.auth.onAuthStateChange(async (event, session) => {
            if (!session) {
                navigation.push("/login")
            }
        })

    }, []);

    async function sigOutUser() {
        const { error } = await supabase.auth.signOut();
        //navigation.push("/login")
    }


    return (

        <div className="flex flex-col justify-center items-center">
            <div className='h-screen w-[95%]'>

                {/* Menu Horizontal */}
                <header className='mt-2 rounded-xl flex flex-row justify-center items-center bg-[rgba(255,255,255,0.3)] relative'>

                    {/* <img src="./assets/Logo.png" alt="Descripcion de logo" className="w-20 p-3"/> */}

                    <h1 className="px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]">Buscar</h1>
                    
                    <div className='flex flex-row justify-center items-center border-2 rounded-xl border-[#E8DEF8] p-1'>
                        <input className="bg-transparent outline-none text-center font-extrabold text-[000000b4]" type="text" />
                        <Lupa className="cursor-pointer saltar"></Lupa>
                    </div>

                    <button data-quantity="0" class="btn-cart">
                            <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                <title>Carrito</title>
                                <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                            </svg>
                            <span class="quantity"></span>
                    </button>

                    <div className='absolute right-0'>
                        <button className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]" onClick={() => sigOutUser()}>Cerrar Sesion</button>
                    </div>

                </header>

                <nav className="Contenedor-Menu-Vertical  ">

                    {/* Menu Vertical */}
                    <div className="mt-2 rounded-xl flex flex-col justify-between items-center bg-[rgba(255,255,255,0.3)] relative">
                        

                        <Categorias />


                        <Planta2 width={15} top={0} left={10} hover={true} />

                        <Planta1 width={15} top={0} left={50} hover={true} />

                        <Planta3 width={20} top={0} right={0} hover={true} />




                        <footer className='mt-2 p-1 w-full rounded-xl flex flex-row  justify-center items-center gap-10'>

                            <Link className="w-[12%] saltar" href={"/facebook"}>
                                <img src="/assets/facebook.png" alt="Logo de Faceboock" />
                            </Link>

                            <Link className="w-[12%] saltar" href={"/facebook"}>
                                <img src="/assets/instagram.png" alt="Logo de Faceboock" />
                            </Link>

                            <Link className="w-[12%] saltar" href={"/facebook"}>
                                <img src="/assets/whatsapp.png" alt="Logo de Faceboock" />
                            </Link>

                        </footer>

                    </div>


                    {/* Contenido */}
                    <div id='ScrollMenu' className="mt-2 rounded-xl bg-[rgb(255,255,255)] overflow-y-auto bg-[rgba(255,255,255,0.3)]">
                        {children}
                    </div>

                </nav>

                {/* Pie de pagina */}
                <footer className='mt-2 p-1 w-full flex flex-col items-center rounded-xl bg-[rgba(255,255,255,0.3)] justify-center gap-10'>


                    <div className="grid grid-cols-4 w-[50%]">
                        <p className="text-xl font-bold text-[#000000b4]">Pie de Pagina</p>
                        <p className="text-xl font-bold text-[#000000b4]">Pie de Pagina</p>
                        <p className="text-xl font-bold text-[#000000b4]">Pie de Pagina</p>
                        <p className="text-xl font-bold text-[#000000b4]">Pie de Pagina</p>
                        <p className="text-xl font-bold text-[#000000b4]">Pie de Pagina</p>
                        <p className="text-xl font-bold text-[#000000b4]">Pie de Pagina</p>
                        <p className="text-xl font-bold text-[#000000b4]">Pie de Pagina</p>
                        <p className="text-xl font-bold text-[#000000b4]">Pie de Pagina</p>
                    </div>
                </footer>

            </div>
        </div>
    );
}

export default Menu;