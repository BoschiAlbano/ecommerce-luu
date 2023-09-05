import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '@/supabase/cliente';
import { useRouter } from 'next/router';
import ListarCategorias from './categorias';

import Link from 'next/link';

import Planta3 from '../plantas/planta3';
import Planta1 from '../plantas/planta1';
import Planta2 from '../plantas/planta2';

import Lupa from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';

import Vertical from './vertical';

// Datos de APi - estas se cargan en el menu Vertical y en el que esta oculto para cell
import { Categorias } from '../DataBaseEjemplo';

const Menu = ({ children }) => {
    const navigation = useRouter();

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (!session) {
                navigation.push('/login');
            }
        });
    }, []);

    async function sigOutUser() {
        const { error } = await supabase.auth.signOut();
        //navigation.push("/login")
    }

    return (
        <div className="relative">
            {/* Menu */}
            <div
                className={`${
                    openMenu ? 'translate-x-[0%]' : 'translate-x-[-100%]'
                } transition-transform duration-300 lg:translate-x-[-100%] w-full h-full absolute flex bg-[rgba(255,255,255,0.64)] z-[999]`}
            >
                <button
                    className="text-[#000000b4] absolute top-0 right-0 p-6 z-[888]"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <ClearIcon sx={{ fontSize: 35 }} />
                </button>

                <div
                    className="flex flex-col justify-between items-center bg-[#ffffff4d] relative overflow-y-scroll overflow-x-hidden"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <ListarCategorias datos={Categorias} />

                    <button
                        className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]"
                        onClick={() => sigOutUser()}
                    >
                        Cerrar Sesion
                    </button>

                    <Planta2 width={12} top={0} left={10} hover={true} />

                    <Planta1 width={12} top={0} left={50} hover={true} />

                    <Planta3 width={15} top={0} right={0} hover={true} />

                    {/* Iconos Redes */}
                    <section className="mt-2 p-1 w-full rounded-xl flex flex-row justify-evenly items-center">
                        <Link
                            className="w-[10%] min-w-[35px] saltar"
                            href={'/facebook'}
                        >
                            <img
                                src="/assets/facebook.png"
                                alt="Logo de Faceboock"
                            />
                        </Link>

                        <Link
                            className="w-[10%] min-w-[35px] saltar"
                            href={'/facebook'}
                        >
                            <img
                                src="/assets/instagram.png"
                                alt="Logo de Faceboock"
                            />
                        </Link>

                        <Link
                            className="w-[10%] min-w-[35px] saltar"
                            href={'/facebook'}
                        >
                            <img
                                src="/assets/whatsapp.png"
                                alt="Logo de Faceboock"
                            />
                        </Link>
                    </section>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="Grilla-nav sm:w-[95%] p-2 h-full">
                    {/* Menu Horizontal __ */}
                    <header className="rounded-xl flex justify-center items-center bg-[rgba(255,255,255,0.3)] relative">
                        <div className="lg:hidden sm:absolute lg:relative flex left-0 px-2">
                            <button
                                className="text-[#000000b4]"
                                onClick={() => setOpenMenu(!openMenu)}
                            >
                                <MenuIcon sx={{ fontSize: 35 }} />
                            </button>
                        </div>

                        <h1 className="sm:flex hidden px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]">
                            Buscar
                        </h1>

                        <div className="flex flex-row justify-center items-center border-2 rounded-xl border-[#E8DEF8] p-1">
                            <input
                                className="bg-transparent w-full outline-none text-center font-extrabold text-[000000b4]"
                                type="text"
                            />
                            <Lupa className="cursor-pointer saltar"></Lupa>
                        </div>

                        <button
                            data-quantity="0"
                            className="btn-cart flex justify-center items-center "
                        >
                            <svg
                                className="icon-cart"
                                viewBox="0 0 24.38 30.52"
                                height="30.52"
                                width="24.38"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Carrito</title>
                                <path
                                    transform="translate(-3.62 -0.85)"
                                    d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                                ></path>
                            </svg>
                            <span className="quantity"></span>
                        </button>

                        <div className="lg:flex hidden absolute right-0">
                            <Link
                                href={'/'}
                                className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]"
                            >
                                Home
                            </Link>

                            <button
                                className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]"
                                onClick={() => sigOutUser()}
                            >
                                Cerrar Sesion
                            </button>
                        </div>
                    </header>

                    <nav className="Contenedor-Menu-Vertical grid-cols-1 w-full h-full">
                        {/* Menu Vertical | */}
                        <Vertical datos={Categorias} />

                        {/* Contenido */}
                        <div
                            id="ScrollMenu"
                            className=" rounded-xl bg-[rgb(255,255,255)] overflow-auto w-full h-full bg-[rgba(255,255,255,0.3)]"
                        >
                            {children}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Menu;

/*

            <div className={`${openMenu ? 'flex' : 'hidden'} lg:hidden w-full h-full absolute bg-[rgba(255,255,255,0.64)] z-[999] `}>

                <button className="text-[#000000b4] absolute top-0 right-0 p-6 z-[888]" onClick={() => setOpenMenu(!openMenu)}><ClearIcon sx={{ fontSize: 35 }} /></button>

                <div className="flex flex-col justify-between items-center bg-[rgba(255,255,255,0.3)] relative overflow-hidden" onClick={() => setOpenMenu(!openMenu)}>

                    <Categorias />

                    <button className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]" onClick={() => sigOutUser()}>Cerrar Sesion</button>

                    <Planta2 width={12} top={0} left={10} hover={true} />

                    <Planta1 width={12} top={0} left={50} hover={true} />

                    <Planta3 width={15} top={0} right={0} hover={true} />



                    {/* Iconos Redes
                    <section className='mt-2 p-1 w-full rounded-xl flex flex-row justify-evenly items-center'>

                        <Link className="w-[10%] min-w-[35px] saltar" href={"/facebook"}>
                            <img src="/assets/facebook.png" alt="Logo de Faceboock" />
                        </Link>

                        <Link className="w-[10%] min-w-[35px] saltar" href={"/facebook"}>
                            <img src="/assets/instagram.png" alt="Logo de Faceboock" />
                        </Link>

                        <Link className="w-[10%] min-w-[35px] saltar" href={"/facebook"}>
                            <img src="/assets/whatsapp.png" alt="Logo de Faceboock" />
                        </Link>

                    </section>

                </div>
                
            </div>


*/
