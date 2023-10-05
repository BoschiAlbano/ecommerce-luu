import React, { useState, useEffect, useContext } from 'react';
import Tarjeta1 from '@/components/tarjetas/Masonry';
import Menu from '@/components/menu';
import Spinner from '@/components/Spinner';
import ApiContext from '@/context/ApiContext';

// import { Productos } from '@/components/DataBaseEjemplo';

const Destacados = () => {
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState([]);
    const { productos } = useContext(ApiContext);

    useEffect(() => {
        console.log('Efecto de Api Destacado');
        setLoading(true);

        // ❗ Fetch o usecontext para buscar los detacados
        setProducto(productos.filter((item) => item.destacado == true));

        setLoading(false);
    }, []);

    return (
        <Menu title="Del Interior - Destacados">
            <div className="pt-24 h-full w-[85%]">
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

export default Destacados;
