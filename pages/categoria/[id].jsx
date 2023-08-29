import Menu from '@/components/menu';
import React from 'react';
import { useRouter } from 'next/router';


const Categoria = () => {


    const router = useRouter();
    const { id } = router.query;

    
    return (
        <Menu>
            <div className="w-full flex flex-col justify-center items-center sm:mt-5 sm:px-5">
                <h1>Aqui el contenido de la categoria {id}</h1>

            </div>
        </Menu>
    ); 
}

export default Categoria;
