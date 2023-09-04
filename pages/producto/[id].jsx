import React, { useState } from 'react';
import Menu from '@/components/menu';
import { useRouter } from 'next/router';
import ProductoImg from '@/components/swiperjs';

// datos de api
const tarjetas = [
    {
        id: 1,
        imagen: 'https://acdn.mitiendanube.com/stores/001/018/213/products/fcvn638911-66790f331acc4045bb16006555347574-640-0.jpg',
        descripcion: 'Imagen de prueba',
    },
    {
        id: 2,
        imagen: 'https://i.pinimg.com/1200x/71/c1/7d/71c17d742cbb238c04721a0c3f1be07f.jpg',
        descripcion: 'Imagen de prueba',
    },
    {
        id: 3,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIZKwdD5p9uwnZblWu9bFweegB-McGZhZTw&usqp=CAU',
        descripcion: 'Imagen de prueba',
    },
    {
        id: 4,
        imagen: 'https://fotografias.larazon.es/clipping/cmsimages02/2023/03/01/0F9FC835-FA99-4C08-9A0B-EB8C9E9F3C50/planta-forma-huevo_98.jpg?crop=750,422,x0,y166&width=1900&height=1069&optimize=low&format=webply',
        descripcion: 'Imagen de prueba',
    },
    {
        id: 5,
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/ideas-decoracion/como-poner-las-plantas-dentro-de-casa/planta-estilizada/116100-1-esl-ES/planta-estilizada.jpg',
        descripcion: 'Imagen de prueba',
    },
    {
        id: 6,
        imagen: 'https://www.elblogdelatabla.com/wp-content/uploads/2021/02/macetas-maceteros-soporte-plantas-interior2Bcox-cox2B1000px.jpg',
        descripcion: 'Imagen de prueba',
    },
    {
        id: 7,
        imagen: 'https://i.blogs.es/c9ba58/4c9c664eb12a47efa6f9ca4920e52e07-1-/450_1000.jpeg',
        descripcion: 'Imagen de prueba',
    },
    {
        id: 8,
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfpgh7yeHlBItNSGiUJeaByYc1xqsvma58tk2F3F_1dvnm-WljJjg1aMd9fhh1j51FzE&usqp=CAU',
        descripcion: 'Imagen de prueba',
    },
];

const Producto = () => {
    const router = useRouter();
    const { id } = router.query;

    // traer imagenes de api con id del producto

    return (
        <Menu>
            <div className="h-[100%] flex justify-center items-center">
                <div className="contenedor-Producto gap-2">
                    <section className="overflow-hidden h-full flex flex-col gap-2">
                        <ProductoImg />
                    </section>

                    <section className=" bg-[#ffffff4d] h-full rounded-xl">
                        Descripcion de producto
                    </section>
                </div>
            </div>
        </Menu>
    );
};

export default Producto;
