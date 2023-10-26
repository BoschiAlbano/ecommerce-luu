import React, { useContext, useEffect } from "react";
import Menu from "@/components/menu";
import Masonry from "@/components/tarjetas/Masonry";
import Link from "next/link";
import Swiper from "@/components/tarjetas/Swiper";
import Carrusel2 from "@/components/carrusel/index2";
import ApiContext from "@/context/ApiContext";
import { useRouter } from "next/router";
import FavoritosContext from "@/context/FavoritosContext";

export default function Home() {
    const { productos, banners, categorias, ActualizarProductos } =
        useContext(ApiContext);
    const { setCarrito, modo } = useContext(FavoritosContext);

    const router = useRouter();

    useEffect(() => {
        const { status } = router.query;

        if (status == "approved") {
            setCarrito([]);
            ActualizarProductos();
            // router.push(process.env.NEXT_PUBLIC_HOST);
        }
    }, [router.query]);

    return (
        <>
            <Menu title="Del Interior - Home">
                <div className="pt-24 h-full sm:w-[85%] w-full">
                    <div className="sm:h-[500px] sm:mx-[15px] mx-[0px]  contenedor-Carrusel items-center">
                        {/* Logo */}
                        <img
                            src={
                                modo
                                    ? "/assets/LogoBlanco.png"
                                    : "/assets/Logo.png"
                            }
                            className=" text-center lg:flex hidden"
                            alt="Del Interior Logo"
                        />
                        {/* Carrusel del banner */}
                        <div className="flex justify-center items-center sm:rounded-xl overflow-hidden sm:h-[500px] h-full">
                            <Carrusel2 slides={banners} />
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mt-5 gap-4">
                        {/* Swiper de Tarjetas Destacadas */}
                        <div className="w-full">
                            <Link
                                href={`destacados`}
                                className="separador before:sm:mx-8 after:sm:mx-8 before:mx-2 after:mx-2 my-10 w-full"
                            >
                                <div className="flex flex-col justify-normal items-center">
                                    <h1 className="text-2xl">Destacados</h1>
                                    <p className="text-sm">(ver mas)</p>
                                </div>
                            </Link>

                            <Swiper
                                Productos={productos.filter(
                                    (prod) => prod.destacado == true
                                )}
                            />
                        </div>

                        {/* Masonry de Tarjetas categoria */}
                        {categorias.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="w-full" //bg-[--Secciones-Color]
                                >
                                    <Link
                                        href={`categoria/${item.id}`}
                                        className="separador before:sm:mx-8 after:sm:mx-8 before:mx-2 after:mx-2 my-10 w-full"
                                    >
                                        <div className="flex flex-col justify-normal items-center">
                                            <h1 className="text-2xl">
                                                {item.descripcion}
                                            </h1>
                                            <p className="text-sm">(ver mas)</p>
                                        </div>
                                    </Link>

                                    <div className="sm:mx-[15px] mx-[5px]">
                                        <Masonry
                                            Productos={productos.filter(
                                                (prod) =>
                                                    prod.categoriaId == item.id
                                            )}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Menu>
        </>
    );
}
