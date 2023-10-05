import React from 'react';
import Masonry from '@mui/lab/Masonry';

import Tarjeta from './Tarjeta';

const Tarjeta1 = ({ Productos = [] }) => {
    if (Productos.length != 0) {
        return (
            <Masonry
                style={{ margin: 0 }}
                columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}
                spacing={1}
            >
                {Productos.map((item, index) => {
                    return <Tarjeta key={index} item={item} />;
                })}
            </Masonry>
        );
    }

    return null;
};

export default Tarjeta1;
