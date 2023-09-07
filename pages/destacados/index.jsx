import React from 'react';

import Tarjeta1 from '@/components/tarjetas/tarjeta1';
import { Productos } from '@/components/DataBaseEjemplo';

import Menu from '@/components/menu';

const Destacados = () => {
    return (
        <Menu>
            <div className="pt-24 h-full w-[95%]">
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
