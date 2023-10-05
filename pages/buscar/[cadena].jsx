import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Menu from '@/components/menu';
import Tarjeta1 from '@/components/tarjetas/Masonry';
import Spinner from '@/components/Spinner';
import ApiContext from '@/context/ApiContext';

// Datos Api
// import { Productos } from '@/components/DataBaseEjemplo';

const Buscar = () => {
    const router = useRouter();
    const { cadena } = router.query;

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState([]);
    const { productos } = useContext(ApiContext);

    useEffect(() => {
        console.log('Efecto de Api Categoria');
        setLoading(true);

        // ❗ Fetch de este produto y traer sus imagenes
        setProducto(obtenerProductosPorDescripcion(productos, cadena));

        setLoading(false);
    }, [cadena]);

    function obtenerProductosPorDescripcion(productos, textoBuscado) {
        const productosFiltrados = productos.filter((producto) => {
            const Titulo = producto.titulo.toLowerCase();
            const textoBuscadoLowerCase = textoBuscado.toLowerCase();

            return Titulo.includes(textoBuscadoLowerCase);
        });

        return productosFiltrados;
    }

    return (
        <Menu>
            <div className=" pt-24 h-full sm:w-[85%] w-full">
                {loading ? (
                    <Spinner />
                ) : (
                    <div className=" h-screen bg-transparent">
                        <Tarjeta1 Productos={producto} />
                    </div>
                )}
            </div>
        </Menu>
    );
};

export default Buscar;
