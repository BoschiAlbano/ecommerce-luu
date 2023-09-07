import React from 'react';
import ProductoImg from '@/components/swiperjs';
import Menu from '@/components/menu';
import { useRouter } from 'next/router';

const Producto = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Menu>
            <div className="pt-24 h-full w-[95%] ">
                <ProductoImg />
            </div>
        </Menu>
    );
};

export default Producto;
