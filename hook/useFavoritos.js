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

    const handleCarrito = (Produto, Cant) => {
        // buscar id en el localStorage
        let item = [].concat(carrito);

        // Comprobar si existe el articulo
        const Id = item.findIndex((item) => item.id === Produto.id);

        if (Id === -1) {
            console.log('Agrego');
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
            console.log('Actualizo');
            // Elimino
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
    return (
        <FavoritosContext.Provider
            value={{ handleLocalstorage, store, handleCarrito, carrito }}
        >
            {children}
        </FavoritosContext.Provider>
    );
};

export default UseFavoritos;
