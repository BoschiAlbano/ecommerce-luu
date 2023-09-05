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
        <Menu>
            <div className="sm:mt-5 sm:px-5 sm:h-[60%] h-[50%]">
                {/* <Carrusel slides={Banners} /> */}
                <Carrusel2 slides={Banners} />
            </div>

            <div className="w-full flex flex-col justify-center items-center sm:mt-5 sm:px-5">
                <Link
                    href={`destacados`}
                    className="separador before:sm:mx-8 after:sm:mx-8 before:mx-2 after:mx-2 my-10"
                >
                    <div className="flex flex-col justify-normal items-center">
                        <h1 className="text-2xl">Destacados</h1>
                        <p className="text-sm">(ver mas)</p>
                    </div>
                </Link>

                <Tarjeta2
                    Productos={Productos.filter(
                        (prod) => prod.destacado == true
                    )}
                />

                <Link
                    href={`categoria/2`}
                    className="separador before:sm:mx-8 after:sm:mx-8 before:mx-2 after:mx-2 my-10"
                >
                    <div className="flex flex-col justify-normal items-center">
                        <h1 className="text-2xl">Exterior</h1>
                        <p className="text-sm">(ver mas)</p>
                    </div>
                </Link>

                <Tarjeta1
                    Productos={Productos.filter((prod) => prod.categoria == 2)}
                />
            </div>
        </Menu>
    );
}
