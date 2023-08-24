
import React from 'react';
import Link from 'next/link';

const categorias = [
    {
        id: 1,
        descripcion: "Categoria 1",
    },    {
        id: 2,
        descripcion: "Categoria 2",
    },    {
        id: 3,
        descripcion: "Categoria 3",
    },    {
        id: 4,
        descripcion: "Categoria 4",
    },    {
        id: 5,
        descripcion: "Categoria 5",
    },
]


const Categorias = () => {

    return (
        
        <div className='flex flex-col w-full justify-center items-center'>

            <img src="./assets/Logo.png" alt="Descripcion de logo" className="p-3 w-[50%]" />

            <h1 className="text-2xl text-[#000000b4] text-left border-b-[2px] border-[#E8DEF8] p-3 mt-3 mb-6 uppercase font-[inherit] font-extrabold">Categorias</h1>

            <div className="w-full flex flex-col items-center">
                {
                    categorias.map((item) => {
                        return (
                            <Link key={item.id} href={`Productos/Categoria/${item.id}`} 
                            className="button mb-4 w-44 rounded-xl flex justify-center items-center text-xl font-[roboto]" 
                            >{item.descripcion}</Link>

                        )
                    })
                }

            </div>


            <div className="absolute bottom-0">
                
            </div>
        </div>

    );
}

export default Categorias;
