import React, { useState, useEffect } from 'react';
import ApiContext from '@/context/ApiContext';

// Base de datos.
import { Categorias, Productos, Banners } from '@/components/DataBaseEjemplo';

const UseApi = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        console.log('Api Categoriassssssssssssssssssssss');

        //❗ Api a catericas
        setCategorias(Categorias);

        //❗ Api Productos
        setProductos(Productos);

        //❗ Api Banners
        setBanners(Banners);
    }, []);

    const ActualizarProductos = () => {
        // Cuando se realice una compra se debe actualizar los productos (stock)
        alert('Actualizar Productos');
    };

    const BuscarProducto = (id) => {
        return Productos.find((item) => item.id === id);
    };

    return (
        <ApiContext.Provider
            value={{
                categorias,
                productos,
                ActualizarProductos,
                banners,
                BuscarProducto,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
};

export default UseApi;
