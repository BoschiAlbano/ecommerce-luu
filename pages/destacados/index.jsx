import React, { useState, useEffect } from 'react';

import Tarjeta1 from '@/components/tarjetas/Masonry';
import { Productos } from '@/components/DataBaseEjemplo';

import Menu from '@/components/menu';

import Spinner from '@/components/Spinner';
const Destacados = () => {
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        console.log('Efecto de Api Destacado');
        setLoading(true);

        // ❗ Fetch de este produto destacados
        setProducto(Productos.filter((item) => item.destacado == true));

        setLoading(false);
    }, []);

    return (
        <Menu>
            <div className="pt-24 h-full w-[95%]">
                {loading ? <Spinner /> : <Tarjeta1 Productos={producto} />}
            </div>
        </Menu>
    );
};

export default Destacados;
