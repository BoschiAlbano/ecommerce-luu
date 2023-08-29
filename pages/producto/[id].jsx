import React from 'react';
import Menu from '@/components/menu';
import { useRouter } from 'next/router';

const Producto = () => {

    const router = useRouter();
    const { id } = router.query;
    
    return (
        <Menu>
            <div>
                <h1>Aqui el contenido del producto seleccionado con id = {id}</h1>
            </div>
        </Menu>
    );
}

export default Producto;
