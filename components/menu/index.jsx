import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '@/supabase/cliente';
import { useRouter } from 'next/router';
import ListarCategorias from './categorias';
import Link from 'next/link';
import Planta3 from '../plantas/planta3';
import Planta1 from '../plantas/planta1';
import Planta2 from '../plantas/planta2';
import ClearIcon from '@mui/icons-material/Clear';
import Lupa from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../footer';
import Spinner from '../Spinner';

// Datos de APi - estas se cargan en el menu Vertical y en el que esta oculto para cell
import { Categorias } from '../DataBaseEjemplo';

const Menu = ({ children }) => {
    const navigation = useRouter();

    const [openMenu, setOpenMenu] = useState(false);
    const MenuRef = useRef();

    const [transparente, setTransparente] = useState(false);

    const [categoriaOpen, SetCategoriaOpen] = useState(false);

    const [spinner, SetSpinner] = useState(true);

    useEffect(() => {
        SetSpinner(true);

        supabase.auth.onAuthStateChange(async (event, session) => {
            if (!session) {
                navigation.push('/');
            } else {
                SetSpinner(false);
            }
        });
    }, []);

    async function sigOutUser() {
        const { error } = await supabase.auth.signOut();
        //navigation.push("/login")
    }

    // bloquear el body para que el menu no se mueva
    useEffect(() => {
        // Cuando el componente se monta
        const bloquearScroll = () => {
            document.body.classList.add('menu-open');
        };

        // Cuando el componente se desmonta
        const habilitarScroll = () => {
            document.body.classList.remove('menu-open');
        };

        if (openMenu) {
            bloquearScroll();
        } else {
            habilitarScroll();
        }

        // Asegurarse de eliminar la clase cuando el componente se desmonta
        return () => {
            habilitarScroll();
        };
    }, [openMenu]); // Ejecuta este efecto cuando openMenu cambie

    // hacer transparente el menu al bajar
    useEffect(() => {
        const EventoMenu = () => {
            if (spinner) {
                return;
            }

            const _menu = MenuRef.current;
            const { y } = _menu.getBoundingClientRect();

            const _background = y <= -100 ? false : true;
            setTransparente(_background);
        };

        window.addEventListener('scroll', EventoMenu);
        return () => {
            window.removeEventListener('scroll', EventoMenu);
        };
    }, []);

    return (
        <>
            <div className="relative flex flex-col justify-center items-center">
                <div className="flex flex-col justify-start items-center sm:w-[95%] w-full gap-2">
                    {/* Header */}
                    <header
                        className={`${
                            transparente ? 'opacity-[1]' : 'opacity-[0.9]'
                        } fixed w-full z-20`}
                    >
                        <div className="flex flex-col justify-center items-center">
                            {/* Menu Oculto*/}
                            <div
                                className={`${
                                    openMenu
                                        ? 'translate-x-[0%]'
                                        : 'translate-x-[-100%]'
                                } transition-transform duration-300 lg:translate-x-[-100%] w-full min-h-[100vh] h-full absolute flex flex-col bg-[--Menu-Desplegable-Color] z-[999] overflow-hidden top-0 left-0 justify-between`}
                                onClick={() => setOpenMenu(!openMenu)}
                            >
                                <button
                                    className="text-[#000000b4] absolute top-0 right-0 p-6 z-[888]"
                                    onClick={() => setOpenMenu(!openMenu)}
                                >
                                    <ClearIcon sx={{ fontSize: 35 }} />
                                </button>

                                <div className="flex flex-col w-full items-center overflow-y-scroll overflow-x-hidden justify-between h-screen">
                                    <ListarCategorias datos={Categorias} />

                                    <button
                                        className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4] mb-6"
                                        onClick={() => sigOutUser()}
                                    >
                                        Cerrar Sesion
                                    </button>

                                    <Planta2
                                        width={8}
                                        top={0}
                                        left={10}
                                        hover={true}
                                        minWidth={30}
                                    />

                                    <Planta1
                                        width={7}
                                        top={0}
                                        left={50}
                                        hover={true}
                                        minWidth={35}
                                    />

                                    <Planta3
                                        width={6}
                                        top={0}
                                        right={0}
                                        hover={true}
                                        minWidth={40}
                                    />

                                    {/* Iconos Redes */}
                                    <section className="p-1 w-full rounded-xl flex flex-row justify-evenly items-center">
                                        <Link
                                            className="w-[10%] min-w-[35px] max-w-[45px] saltar"
                                            href={'/facebook'}
                                        >
                                            <img
                                                src="/assets/facebook.png"
                                                alt="Logo de Faceboock"
                                            />
                                        </Link>

                                        <Link
                                            className="w-[10%] min-w-[35px] max-w-[45px] saltar"
                                            href={'/facebook'}
                                        >
                                            <img
                                                src="/assets/instagram.png"
                                                alt="Logo de Faceboock"
                                            />
                                        </Link>

                                        <Link
                                            className="w-[10%] min-w-[35px] max-w-[45px] saltar"
                                            href={'/facebook'}
                                        >
                                            <img
                                                src="/assets/whatsapp.png"
                                                alt="Logo de Faceboock"
                                            />
                                        </Link>
                                    </section>
                                </div>

                                {/* Pie de Menu. (❌ la barra del navegador en dispositivos mobiles cuando se esconde no se muestra la parte inferior del menu ya que es un h-screen ❌) */}
                                {/* <div className="h-[60px] w-full items-center">
                                    <div className=" flex h-full">
                                        <div className="gradiente-borde w-full h-full flex flex-col justify-center items-center">
                                            <h1 className="text-[--Texto-Color] font-extrabold text-xl">
                                                Boschi Albano Jose
                                            </h1>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* Barra de Color degradado*/}
                            <div className="gradiente-borde w-full h-[20px]"></div>
                            {/* Header */}
                            <div className="flex justify-evenly items-center relative py-2 sm:w-[95%] w-[100%] bg-[--Secciones-Color]">
                                {/* Icono Menu */}
                                <div className="lg:hidden sm:absolute lg:relative flex left-0 px-2 z-[200]">
                                    <button
                                        className="text-[#000000b4]"
                                        onClick={() =>
                                            setOpenMenu((openMenu) => !openMenu)
                                        }
                                    >
                                        <MenuIcon sx={{ fontSize: 35 }} />
                                    </button>
                                </div>

                                {/* Buscar y Carrito */}
                                <div className="flex flex-row justify-center items-center">
                                    <h1 className="sm:flex hidden px-3 text-xl font-[inherit] font-extrabold text-[--Texto-Color]">
                                        Buscar
                                    </h1>
                                    <div className="flex flex-row justify-center items-center border-2 rounded-xl border-[--Buscar-Color-Borde] p-1">
                                        <input
                                            className="bg-transparent w-full outline-none text-center font-extrabold text-[000000b4]"
                                            type="text"
                                        />
                                        <Lupa className="cursor-pointer saltar"></Lupa>
                                    </div>
                                    <button
                                        data-quantity="0"
                                        className="btn-cart flex justify-center items-center z-[200]"
                                        onClick={() => {
                                            alert(
                                                'Implementar Carrito de Compras'
                                            );
                                        }}
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
                                </div>

                                {/* Home y cerrar sesion */}
                                <div className="lg:flex hidden absolute right-0">
                                    <div className="relative ">
                                        <div
                                            className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4] relative"
                                            onMouseEnter={() =>
                                                SetCategoriaOpen(true)
                                            }
                                            onMouseLeave={() =>
                                                SetCategoriaOpen(false)
                                            }
                                            onClick={() =>
                                                SetCategoriaOpen(!categoriaOpen)
                                            }
                                        >
                                            Categorias
                                        </div>

                                        <div
                                            className={`absolute left-[-50%] shadow-xls w-[200%] ${
                                                categoriaOpen
                                                    ? 'overflow-visible'
                                                    : 'hidden'
                                            }`}
                                            onMouseEnter={() =>
                                                SetCategoriaOpen(true)
                                            }
                                            onMouseLeave={() =>
                                                SetCategoriaOpen(false)
                                            }
                                        >
                                            <div
                                                className={`bg-[--Secciones-Color] mt-5 pt-3 shadow-xls w-full h-full rounded-md text-center ${
                                                    categoriaOpen
                                                        ? 'overflow-visible'
                                                        : 'hidden'
                                                }`}
                                            >
                                                <div className="w-full flex flex-col items-center">
                                                    {Categorias.map((item) => {
                                                        return (
                                                            <Link
                                                                key={item.id}
                                                                href={`/categoria/${item.id}`}
                                                                className="button mb-4 w-44 rounded-xl flex justify-center items-center text-xl font-[roboto]"
                                                            >
                                                                {
                                                                    item.descripcion
                                                                }
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link
                                        href={'/home'}
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
                            </div>

                            <Planta2
                                width={3}
                                top={0}
                                left={10}
                                hover={true}
                                minWidth={30}
                            />

                            <Planta1
                                width={4}
                                top={0}
                                left={50}
                                hover={true}
                                minWidth={35}
                            />

                            <Planta3
                                width={4}
                                top={0}
                                right={0}
                                hover={true}
                                minWidth={40}
                            />
                        </div>
                    </header>
                </div>
            </div>

            {spinner ? (
                <div className=" h-full w-full flex flex-col items-center relative pt-24">
                    <Spinner />
                </div>
            ) : (
                <div
                    ref={MenuRef}
                    className=" h-full w-full flex flex-col items-center relative"
                >
                    {/* Contenido */}
                    {children}

                    {/* Footer */}
                    <div className="mt-4 w-[95%]">
                        <Footer categorias={Categorias} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
