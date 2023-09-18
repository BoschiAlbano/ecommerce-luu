'use client';
import React from 'react';
import Link from 'next/link';

const Categorias = ({ datos }) => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <Link
                href={'/home'}
                className="w-[70%] sm:w-[40%] md:w-[40%] lg:w-[70%] pb-4 pt-6 "
            >
                <img
                    src={`${process.env.NEXT_PUBLIC_HOST}/assets/Logo.png`}
                    alt="Descripcion de logo"
                />
            </Link>
            <h1 className="text-2xl text-[#000000b4] text-left border-b-[2px] border-[--Texto-Categorias-Hover] p-3 mb-3 uppercase font-[inherit] font-extrabold">
                Categorias
            </h1>

            <div className="w-full flex flex-col items-center mb-4">
                {datos.map((item) => {
                    return (
                        <Link
                            key={item.id}
                            href={`/categoria/${item.id}`}
                            className="button mb-4 w-44 rounded-xl flex justify-center items-center text-xl font-[roboto]"
                        >
                            {item.descripcion}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Categorias;
