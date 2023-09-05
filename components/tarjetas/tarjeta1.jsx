import React from 'react';
import Masonry from '@mui/lab/Masonry';

import Agregar from '../bonones/agregar';

import Corazon from '../bonones/corazon';

import Link from 'next/link';

const Tarjeta1 = ({ Productos }) => {
    console.log(Productos);

    return (
        <Masonry columns={{ xs: 2, sm: 3, lg: 4 }} spacing={1}>
            {Productos.map((item, index) => {
                return (
                    <div key={index} className="card-productos vibrar">
                        <div className="card_box shadow-2xl">
                            <div className="flex flex-col justify-center items-center overflow-hidden">
                                <div className="absolute left-0 top-0 p-2">
                                    <Corazon />
                                </div>

                                <Link
                                    href={`/producto/${item.id}`}
                                    className="w-full"
                                >
                                    <img
                                        src={item.imagen}
                                        alt={item.descripcion}
                                        loading="lazy"
                                        className="rounded-t-[0.5rem] w-full "
                                    />
                                </Link>

                                <p className="font-[roboto] font-extrabold uppercase text-1xl sm:text-2xl text-[#000000b4] mt-4">
                                    $600
                                </p>

                                <h1 className="font-[roboto] font-extrabold uppercase text-xs sm:text-xl text-[#000000b4] mt-2">
                                    {item.descripcion}
                                </h1>

                                <div className="mt-4">
                                    <div onClick={() => alert('agregar')}>
                                        <Agregar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Masonry>
    );
};

export default Tarjeta1;
