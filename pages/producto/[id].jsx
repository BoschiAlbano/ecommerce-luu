import React, { useEffect, useState } from 'react';
import ProductoImg from '@/components/swiperjs/ProdutoVista';
import Menu from '@/components/menu';
import { useRouter } from 'next/router';
import Spinner from '@/components/Spinner';

import { Productos } from '@/components/DataBaseEjemplo';

const Producto = () => {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

    useEffect(() => {
        setLoading(true);

        // ❗ Fetch de este produto y traer sus imagenes
        setProducto(Productos.filter((item) => item.id == id));

        setLoading(false);
    }, [id]);

    return (
        <Menu>
            <div className="pt-24 h-full w-[95%] ">
                {loading ? <Spinner /> : <ProductoImg producto={producto[0]} />}
            </div>
        </Menu>
    );
};

export default Producto;
