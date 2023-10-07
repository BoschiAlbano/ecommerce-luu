import React from 'react';

import Agregar from '../bonones/agregar';

import Corazon from '../bonones/corazon';

import Link from 'next/link';

const Tarjeta = ({ item = {} }) => {
    return (
        <div className="card-productos vibrar">
            <div className="card_box shadow-xl">
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="absolute left-0 top-0 p-2">
                        <Corazon articulo={item} />
                    </div>

                    <Link href={`/producto/${item.id}`} className="w-full">
                        <img
                            src={item.imagen}
                            alt={item.titulo}
                            loading="lazy"
                            className="rounded-t-[0.5rem] w-full "
                        />
                    </Link>

                    <p className="font-[roboto] font-extrabold uppercase text-1xl sm:text-2xl text-[#000000b4] mt-4">
                        ${item.precio}
                    </p>

                    <h1
                        className=" w-full px-1 text-center font-[roboto] font-extrabold uppercase text-xs sm:text-base text-[#000000b4] mt-2"
                        style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        {item.titulo}
                    </h1>

                    <div className="mt-4">
                        <Agregar producto={item} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;
