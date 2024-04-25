import React, { useEffect, useState, useRef, useContext } from "react";
import { supabase } from "@/supabase/cliente";
import { useRouter } from "next/router";
import ListarCategorias from "./categorias";
import Link from "next/link";
import Planta3 from "../plantas/planta3";
import Planta1 from "../plantas/planta1";
import Planta2 from "../plantas/planta2";
import ClearIcon from "@mui/icons-material/Clear";
import Lupa from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../footer";
import Spinner from "../Spinner";
import Carrito from "../bonones/carrito";
import ApiContext from "@/context/ApiContext";
import Head from "next/head";
import SwitchMaterial from "../switch";
import AlertDialogSlide from "../alert/dialog";

const Menu = ({ title = "Del Interior", children }) => {
    const navigation = useRouter();

    const [openMenu, setOpenMenu] = useState(false);
    const MenuRef = useRef();

    const [transparente, setTransparente] = useState(false);

    const [categoriaOpen, SetCategoriaOpen] = useState(false);

    const [spinner, SetSpinner] = useState(true);

    const { categorias } = useContext(ApiContext);

    const [texto, setTexto] = useState("");

    const [cerrarSesion, setCerrarSesion] = useState(false);

    useEffect(() => {
        SetSpinner(true);

        supabase.auth.onAuthStateChange(async (event, session) => {
            if (!session) {
                navigation.push("/");
            } else {
                SetSpinner(false);
            }
        });
    }, []);

    // // bloquear el body para que el menu no se mueva
    useEffect(() => {
        // Cuando el componente se monta
        const bloquearScroll = () => {
            document.body.classList.add("menu-open");
        };

        // Cuando el componente se desmonta
        const habilitarScroll = () => {
            document.body.classList.remove("menu-open");
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

        window.addEventListener("scroll", EventoMenu);
        return () => {
            window.removeEventListener("scroll", EventoMenu);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (texto) {
            navigation.push(`/buscar/${texto}`);
        } else {
            navigation.push(`/buscar`);
        }
    };

    let titulo = title;

    useEffect(() => {
        window.addEventListener("blur", () => {
            document.title = "¡No te vayas! 😱";
        });

        window.addEventListener("focus", () => {
            document.title = titulo;
        });
    }, []);

    const CerrarSesion = () => {
        setCerrarSesion(!cerrarSesion);
    };

    return (
        <>
            <Head>
                <title>{titulo}</title>
                <meta
                    name="Del Interior - Deco & Bienestar"
                    content='¡Bienvenido a "Del Interior - Deco & Bienestar"! Tu destino en línea para encontrar los productos más encantadores y funcionales para embellecer y mejorar tu hogar desde adentro. Nuestra amplia gama de productos está diseñada para elevar tu espacio interior, creando un ambiente de calidez y comodidad.

Explora nuestra selección cuidadosamente curada de muebles elegantes, decoración con estilo, iluminación cautivadora y accesorios únicos que transformarán cualquier habitación en un santuario de bienestar. Desde piezas modernas hasta opciones clásicas, tenemos algo para todos los gustos y estilos.

En "Del Interior", no solo nos enfocamos en la estética, sino también en la calidad y el confort. Queremos que te sientas en armonía en tu hogar, y nuestros productos están diseñados para hacer precisamente eso.

¡Descubre una experiencia de compra sin igual en "Del Interior - Deco & Bienestar" y haz que tu hogar refleje tu personalidad y estilo con productos que te inspirarán día tras día!'
                />
                <link rel="icon" href="/assets/Icono.ico" />
            </Head>
            <div className="mostrar relative flex flex-col justify-center items-center">
                <div className="flex flex-col justify-start items-center sm:w-[95%] w-full gap-2">
                    {/* Header */}
                    <header
                        className={`${
                            transparente ? "opacity-[1]" : "opacity-[0.9]"
                        } fixed w-full z-20`}
                    >
                        <div className="flex flex-col justify-center items-center">
                            {/* Menu Oculto*/}
                            <div
                                className={`${
                                    openMenu
                                        ? "translate-x-[0%]"
                                        : "translate-x-[-100%]"
                                } transition-transform duration-300 lg:translate-x-[-100%] w-full  absolute flex flex-col bg-[--Menu-Desplegable-Color] z-[999] overflow-hidden top-0 left-0 justify-between`}
                                onClick={() => setOpenMenu(!openMenu)}
                            >
                                <button
                                    className="text-[--Texto-Color] absolute top-0 right-0 p-6 z-[888]"
                                    onClick={() => setOpenMenu(!openMenu)}
                                >
                                    <ClearIcon sx={{ fontSize: 35 }} />
                                </button>

                                <div className="flex flex-col w-full items-center overflow-y-scroll overflow-x-hidden justify-between h-[100dvh]">
                                    <ListarCategorias datos={categorias} />

                                    <button
                                        className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4] mb-6"
                                        onClick={() => CerrarSesion()}
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
                                            href={"/facebook"}
                                        >
                                            <img
                                                src="/assets/facebook.png"
                                                alt="Logo de Faceboock"
                                            />
                                        </Link>

                                        <Link
                                            className="w-[10%] min-w-[35px] max-w-[45px] saltar"
                                            href={"/facebook"}
                                        >
                                            <img
                                                src="/assets/instagram.png"
                                                alt="Logo de Faceboock"
                                            />
                                        </Link>

                                        <Link
                                            className="w-[10%] min-w-[35px] max-w-[45px] saltar"
                                            href={"/facebook"}
                                        >
                                            <img
                                                src="/assets/whatsapp.png"
                                                alt="Logo de Faceboock"
                                            />
                                        </Link>
                                    </section>
                                </div>
                            </div>
                            {/* Barra de Color degradado*/}
                            <div className="gradiente-borde w-full h-[28px] flex justify-end items-center">
                                <SwitchMaterial />
                            </div>
                            {/* Header */}
                            <div className="flex justify-evenly items-center relative py-2  w-[100%] bg-[--Secciones-Color]">
                                {/* Icono Menu */}
                                <div className="lg:hidden sm:absolute lg:relative flex left-0 px-2 z-[200]">
                                    <button
                                        className="text-[--Texto-Color]"
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
                                    <form
                                        onSubmit={(e) => handleSubmit(e)}
                                        className="flex flex-row justify-center items-center border-2 rounded-xl border-[--Buscar-Color-Borde] p-1"
                                    >
                                        <input
                                            className="bg-transparent w-full outline-none text-center font-extrabold text-[--Texto-Color]"
                                            type="text"
                                            onChange={(e) => {
                                                setTexto(e.target.value);
                                            }}
                                            value={texto}
                                        />

                                        <button type="submit">
                                            <Lupa className="cursor-pointer saltar text-[--Texto-Color]"></Lupa>
                                        </button>
                                    </form>

                                    {/* Boton Carrito */}
                                    <Carrito />
                                </div>

                                {/* Categorias , Home y cerrar sesion */}
                                <div className="lg:flex hidden absolute right-0">
                                    <div className="relative ">
                                        <div
                                            className="button px-3 text-xl font-[inherit] font-extrabold text-[--Texto-Color] relative"
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
                                                    ? "overflow-visible"
                                                    : "hidden"
                                            }`}
                                            onMouseEnter={() =>
                                                SetCategoriaOpen(true)
                                            }
                                            onMouseLeave={() =>
                                                SetCategoriaOpen(false)
                                            }
                                        >
                                            <div
                                                className={`relative EfectoCategoria h-[250px] bg-[--Secciones-Color] mt-5 pt-3 shadow-xls w-full  rounded-md text-center overflow-hidden`}
                                            >
                                                <div className="w-full flex flex-col items-center">
                                                    {categorias.map((item) => {
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
                                        href={"/home"}
                                        className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]"
                                    >
                                        Home
                                    </Link>

                                    <button
                                        className="button px-3 text-xl font-[inherit] font-extrabold text-[#000000b4]"
                                        onClick={() => CerrarSesion()}
                                    >
                                        Cerrar Sesion
                                    </button>

                                    <AlertDialogSlide
                                        setOpen={setCerrarSesion}
                                        open={cerrarSesion}
                                    />
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
                    className="mostrar h-full w-full flex flex-col items-center relative  overflow-y-hidden"
                >
                    {/* Contenido */}
                    <div className="h-full w-full flex flex-col items-center min-h-screen">
                        {children}
                    </div>

                    {/* Footer */}
                    <div className="mt-4 sm:w-[85%] w-[100%]">
                        <Footer categorias={categorias} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
