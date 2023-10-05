import Menu from '@/components/menu';
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';

import Tarjeta1 from '@/components/tarjetas/Masonry';
import ApiContext from '@/context/ApiContext';

// Datos Api
// import { Productos } from '@/components/DataBaseEjemplo';

import Spinner from '@/components/Spinner';
const Categoria = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState([]);

    const { productos, categorias } = useContext(ApiContext);

    const Descripcion = categorias.find((item) => item.id == id).descripcion;

    useEffect(() => {
        console.log('Efecto de Api Categoria');
        setLoading(true);

        // ❗ Fetch  o usar el contexto y filtrar
        setProducto(productos.filter((item) => item.categoriaId == id));

        setLoading(false);
    }, [id]);

    return (
        <Menu title={`Del Interior - ${Descripcion}`}>
            <div className=" pt-24 h-full w-[85%]">
                {loading ? (
                    <Spinner />
                ) : (
                    <div className=" h-screen bg-transparent">
                        <Tarjeta1 Productos={producto} />
                    </div>
                )}
            </div>
        </Menu>
    );
};

export default Categoria;
