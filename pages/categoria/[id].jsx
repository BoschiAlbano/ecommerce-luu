import Menu from '@/components/menu';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Tarjeta1 from '@/components/tarjetas/Masonry';

// Datos Api
import { Productos } from '@/components/DataBaseEjemplo';

import Spinner from '@/components/Spinner';
const Categoria = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        console.log('Efecto de Api Categoria');
        setLoading(true);

        // ❗ Fetch de este produto y traer sus imagenes
        setProducto(Productos.filter((item) => item.categoria == id));

        setLoading(false);
    }, [id]);

    return (
        <Menu>
            <div className=" pt-24 h-full w-[95%]">
                {loading ? <Spinner /> : <Tarjeta1 Productos={producto} />}
            </div>
        </Menu>
    );
};

export default Categoria;
