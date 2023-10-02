import React from 'react';
import FavoritosContext from '@/context/FavoritosContext';

import { useLocalStorage } from '@/components/localStorage/hook';

const UseFavoritos = ({ children }) => {
    const [store, setValue] = useLocalStorage('Favoritos', []);
    const [carrito, setCarrito] = useLocalStorage('Carrito', []);

    const handleLocalstorage = ({ id, descripcion }) => {
        // buscar id en el localStorage
        let item = [].concat(store);

        // Comprobar si existe el articulo
        const Id = item.findIndex((item) => item.id === id);

        if (Id === -1) {
            console.log('Agrego');
            // Agrego
            item.push({ id, descripcion });
            setValue(item);
        } else {
            console.log('Elimino');
            // Elimino
            item.splice(Id, 1);
            setValue(item);
        }
    };

    const handleCarrito = (Produto, Cant, Modificar) => {
        // buscar id en el localStorage
        let item = [].concat(carrito);

        // Comprobar si existe el articulo
        const Id = item.findIndex((item) => item.id === Produto.id);

        if (Id === -1) {
            // Agrego
            if (Produto.cantidad > 0) {
                item.push({ ...Produto, cantidad: Cant });
                setCarrito(item);
                alert(
                    `El Producto - ${Produto.titulo} - fue Agregado al carrito de Compras`
                );
            } else {
                alert(`No hay stock para el Producto - ${Produto.titulo} -`);
            }
        } else {
            // Modifico
            if (Modificar) {
                // Viene de Productos que de deja seleccionar la cantidad - entoces remplazo si existe el producto
                item[Id].cantidad = Cant;
                setCarrito(item);
                return;
            }
            if (Produto.cantidad >= item[Id].cantidad + Cant) {
                item[Id].cantidad += 1;
                setCarrito(item);
                alert(
                    `El Producto - ${Produto.titulo} - fue Agregado al carrito de Compras - Cantidad ${item[Id].cantidad}`
                );
            } else {
                alert(
                    `No hay stock para el Producto - ${Produto.titulo} - Stock Actual ${Produto.cantidad} Unidades`
                );
            }
        }
    };

    const handleCarritoDelete = (id) => {
        // buscar id en el localStorage
        let item = [].concat(carrito);

        // Comprobar si existe el articulo
        const Id = item.findIndex((item) => item.id === id);

        if (Id === -1) return;

        item.splice(Id, 1);

        setCarrito(item);
    };

    const BuscarProductoCarrito = (id) => {
        // buscar id en el localStorage
        const Id = carrito.findIndex((item) => item.id === id);

        if (Id === -1) return 0;

        return carrito[Id];
    };

    return (
        <FavoritosContext.Provider
            value={{
                handleLocalstorage,
                store,
                handleCarrito,
                carrito,
                handleCarritoDelete,
                BuscarProductoCarrito,
            }}
        >
            {children}
        </FavoritosContext.Provider>
    );
};

export default UseFavoritos;
