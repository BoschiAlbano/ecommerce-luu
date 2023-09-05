import React from 'react';

import Tarjeta1 from '@/components/tarjetas/tarjeta1';
import { Productos } from '@/components/DataBaseEjemplo';

import Menu from '@/components/menu';

const Destacados = () => {
    return (
        <Menu>
            <div className="w-full flex flex-col justify-center items-center sm:mt-5 sm:px-5">
                <Tarjeta1
                    Productos={Productos.filter(
                        (prod) => prod.destacado == true
                    )}
                />
            </div>
        </Menu>
    );
};

export default Destacados;
