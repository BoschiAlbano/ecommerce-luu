import React, { useContext, useEffect } from 'react';
import Menu from '@/components/menu';
import Masonry from '@/components/tarjetas/Masonry';
import Link from 'next/link';
import Swiper from '@/components/tarjetas/Swiper';
import Carrusel2 from '@/components/carrusel/index2';
import ApiContext from '@/context/ApiContext';

export default function Home() {
    const { productos, banners, categorias } = useContext(ApiContext);

    return (
        <>
            <Menu title="Del Interior - Home">
                <div className="pt-24 h-full sm:w-[85%] w-full">
                    {/* Carrusel del banner */}
                    <div className=" sm:h-[500px] bg-[--Secciones-Color] contenedor-Carrusel sm:mx-[15px] mx-[0px]">
                        <div className="lg:flex hidden justify-center items-center sm:h-[500px]">
                            <img
                                src={`${process.env.NEXT_PUBLIC_HOST}/assets/Logo.png`}
                                alt="Descripcion de logo"
                                className=" object-contain h-[100%]"
                            />
                        </div>
                        <div className="flex justify-center items-center sm:h-[500px]">
                            <Carrusel2 slides={banners} />
                        </div>
                    </div>

                    {/* Swiper de Tarjetas Destacadas */}
                    <div className="w-full flex flex-col justify-center items-center mt-5 gap-4">
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
