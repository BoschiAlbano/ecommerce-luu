import Menu from '@/components/menu';
import React from 'react';
import { useRouter } from 'next/router';

import Tarjeta1 from '@/components/tarjetas/tarjeta1';
// Datos Api
import { Productos } from '@/components/DataBaseEjemplo';

const Categoria = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Menu>
            <div className="w-full flex flex-col justify-center items-center sm:mt-5 sm:px-5">
                <Tarjeta1
                    Productos={Productos.filter((prod) => prod.categoria == id)}
                />
            </div>
        </Menu>
    );
};

export default Categoria;
