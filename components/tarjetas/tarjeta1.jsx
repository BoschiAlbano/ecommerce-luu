import React from 'react';
import Masonry from '@mui/lab/Masonry'
 
import Agregar from '../bonones/agregar';

import Corazon from '../bonones/corazon';

import Link from 'next/link';

// datos de api
const tarjetas = [
    {
        id: 1,
        imagen: "https://acdn.mitiendanube.com/stores/001/018/213/products/fcvn638911-66790f331acc4045bb16006555347574-640-0.jpg",
        descripcion: "Imagen de prueba"

    },
    {
        id: 2,
        imagen: "https://i.pinimg.com/1200x/71/c1/7d/71c17d742cbb238c04721a0c3f1be07f.jpg",
        descripcion: "Imagen de prueba"

    },
    {
        id: 3,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIZKwdD5p9uwnZblWu9bFweegB-McGZhZTw&usqp=CAU",
        descripcion: "Imagen de prueba"

    },
    {
        id: 4,
        imagen: "https://fotografias.larazon.es/clipping/cmsimages02/2023/03/01/0F9FC835-FA99-4C08-9A0B-EB8C9E9F3C50/planta-forma-huevo_98.jpg?crop=750,422,x0,y166&width=1900&height=1069&optimize=low&format=webply",
        descripcion: "Imagen de prueba"

    },
    {
        id: 5,
        imagen: "https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/ideas-decoracion/como-poner-las-plantas-dentro-de-casa/planta-estilizada/116100-1-esl-ES/planta-estilizada.jpg",
        descripcion: "Imagen de prueba"

    },
    {
        id: 6,
        imagen: "https://www.elblogdelatabla.com/wp-content/uploads/2021/02/macetas-maceteros-soporte-plantas-interior2Bcox-cox2B1000px.jpg",
        descripcion: "Imagen de prueba"

    },
    {
        id: 7,
        imagen: "https://i.blogs.es/c9ba58/4c9c664eb12a47efa6f9ca4920e52e07-1-/450_1000.jpeg",
        descripcion: "Imagen de prueba"

    },
    {
        id: 8,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpgh7yeHlBItNSGiUJeaByYc1xqsvma58tk2F3F_1dvnm-WljJjg1aMd9fhh1j51FzE&usqp=CAU",
        descripcion: "Imagen de prueba"

    }
]

const Tarjeta1 = () => {

    return (
        <Masonry columns={{ xs: 2, sm: 3, lg: 4 }} spacing={1}>
            {tarjetas.map((item, index) => {
            return(
                
                <div key={index} className="card-productos vibrar">

                    <div className="card_box shadow-2xl">
                    
                        <div className='flex flex-col justify-center items-center overflow-hidden'>
                                
                                <div className="absolute left-0 top-0 p-2">
                                    <Corazon/>
                                </div>

                                <Link href={`/producto/${item.id}`} className='w-full'>
                                    <img src={item.imagen} alt={item.descripcion} loading="lazy" className="rounded-t-[0.5rem] w-full "/>
                                </Link>

                            <p className='font-[roboto] font-extrabold uppercase text-1xl sm:text-2xl text-[#000000b4] mt-4'>$600</p>

                            <h1 className='font-[roboto] font-extrabold uppercase text-xs sm:text-xl text-[#000000b4] mt-2'>{item.descripcion}</h1>

                            <div className="mt-4">

                                <div onClick={() => alert("agregar")}>
                                    <Agregar/>
                                </div>

                            </div>



                        </div>

                    </div>

                </div>

            )
        })}
        </Masonry>
    );
}

export default Tarjeta1;