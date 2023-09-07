import React from 'react';
import Menu from '@/components/menu';
// import Carrusel from '@/components/carrusel';
import Tarjeta1 from '@/components/tarjetas/tarjeta1';
import Link from 'next/link';
import Tarjeta2 from '@/components/tarjetas/tarjeta2';
import Carrusel2 from '@/components/carrusel/index2';

// datos de api
import { Productos, Banners } from '@/components/DataBaseEjemplo';

export default function Home() {
    return (
        <>
            <Menu>
                <div className="pt-24 h-full w-[95%]">
                    <div className=" sm:flex block flex-row justify-center items-center sm:h-[500px] h-auto bg-[--Secciones-Color]">
                        <Link href={'/'} className="sm:flex hidden">
                            <img
                                src={`${process.env.NEXT_PUBLIC_HOST}/assets/Logo.png`}
                                alt="Descripcion de logo"
                            />
                        </Link>
                        <Carrusel2 slides={Banners} />
                    </div>

                    <div className="w-full flex flex-col justify-center items-center mt-5 gap-4">
                        <div className="bg-[--Secciones-Color] w-full">
                            <Link
                                href={`destacados`}
                                className="separador before:sm:mx-8 after:sm:mx-8 before:mx-2 after:mx-2 my-10 w-full"
                            >
                                <div className="flex flex-col justify-normal items-center">
                                    <h1 className="text-2xl">
                                        Novedades para vos!
                                    </h1>
                                    <p className="text-sm">(ver mas)</p>
                                </div>
                            </Link>

                            <div className="sm:mx-[2rem] mx-[0rem]">
                                <Tarjeta2
                                    Productos={Productos.filter(
                                        (prod) => prod.destacado == true
                                    )}
                                />
                            </div>
                        </div>
                        <div className="bg-[--Secciones-Color] w-full">
                            <Link
                                href={`categoria/2`}
                                className="separador before:sm:mx-8 after:sm:mx-8 before:mx-2 after:mx-2 my-10 w-full"
                            >
                                <div className="flex flex-col justify-normal items-center">
                                    <h1 className="text-2xl">Exterior</h1>
                                    <p className="text-sm">(ver mas)</p>
                                </div>
                            </Link>

                            <div className="sm:mx-[2rem] mx-[0rem]">
                                <Tarjeta1
                                    Productos={Productos.filter(
                                        (prod) => prod.categoria == 2
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Menu>
        </>
    );
}
