import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Menu from '@/components/menu';
import Tarjeta1 from '@/components/tarjetas/Masonry';
import Spinner from '@/components/Spinner';
import ApiContext from '@/context/ApiContext';
// Datos Api
// import { Productos } from '@/components/DataBaseEjemplo';

const Index = () => {
    const router = useRouter();
    const { cadena } = router.query;

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState([]);

    const { productos } = useContext(ApiContext);

    useEffect(() => {
        console.log('Efecto de Api Categoria');
        setLoading(true);

        // ❗ Fetch o contexto
        setProducto(productos);

        setLoading(false);
    }, [cadena]);

    return (
        <Menu>
            <div className=" pt-24 h-full sm:w-[85%] w-full">
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

export default Index;
