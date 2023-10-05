import React, { useState, useEffect } from 'react';
import ApiContext from '@/context/ApiContext';
import { supabase } from '@/supabase/cliente';

// Base de datos.
// import { Categorias, Productos, Banners } from '@/components/DataBaseEjemplo';

const UseApi = ({ children }) => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        console.log('Api Categoriassssssssssssssssssssss');

        //❗ Api a catericas

        async function ApiCategorias() {
            try {
                let { data: Categorias, error } = await supabase
                    .from('Categorias')
                    .select('*');

                if (error) {
                    console.log(error);
                    return;
                }

                setCategorias(Categorias);
            } catch (error) {
                console.log(error);
            }
        }

        //❗ Api Articulos
        async function ApiArticulos() {
            try {
                let { data: Articulos, error } = await supabase
                    .from('Articulos')
                    .select('*');

                if (error) {
                    console.log(error);
                    return;
                }

                setProductos(Articulos);
            } catch (error) {
                console.log(error);
            }
        }

        //❗ Api Banners
        async function ApiBanners() {
            try {
                let { data: Articulos, error } = await supabase
                    .from('Banners')
                    .select('*');

                if (error) {
                    console.log(error);
                    return;
                }

                setBanners(Articulos);
            } catch (error) {
                console.log(error);
            }
        }

        ApiCategorias();
        ApiArticulos();
        ApiBanners();
    }, []);

    const ActualizarProductos = () => {
        // Cuando se realice una compra se debe actualizar los productos (stock)
        alert('Actualizar Productos');
    };

    const BuscarProducto = (id) => {
        return productos.find((item) => item.id === id);
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
