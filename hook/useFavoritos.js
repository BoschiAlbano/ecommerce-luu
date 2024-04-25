import React, { useState } from "react";
import FavoritosContext from "@/context/FavoritosContext";
import { useLocalStorage } from "@/components/localStorage/hook";
import Alert from "@/components/alert/alert";

const UseFavoritos = ({ children }) => {
    const [store, setValue] = useLocalStorage("Favoritos", []);
    const [carrito, setCarrito] = useLocalStorage("Carrito", []);
    const [modo, setModo] = useLocalStorage("Modo", false);

    const [alert, setAlert] = useState({
        open: false,
        vertical: "bottom",
        horizontal: "right",
        msj: "",
        severity: "",
    });

    const handleLocalstorage = ({ id, titulo }) => {
        // buscar id en el localStorage
        let item = [].concat(store);

        // Comprobar si existe el articulo
        const Id = item.findIndex((item) => item.id === id);

        if (Id === -1) {
            // Agrego
            item.push({ id, titulo });
            setValue(item);

            setAlert({
                ...alert,
                msj: `El Producto - ${titulo} - fue Agregado a favoritos`,
                severity: "success",
                open: true,
            });
        } else {
            // Elimino
            item.splice(Id, 1);
            setValue(item);

            setAlert({
                ...alert,
                msj: `El Producto - ${titulo} - fue Eliminado de favoritos`,
                severity: "warning",
                open: true,
            });
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
                setAlert({
                    ...alert,
                    msj: `El Producto - ${Produto.titulo} - fue Agregado al carrito de Compras`,
                    severity: "success",
                    open: true,
                });
            } else {
                setAlert({
                    ...alert,
                    msj: `No hay stock para el Producto - ${Produto.titulo} -`,
                    severity: "warning",
                    open: true,
                });
            }
        } else {
            // Modifico
            if (Modificar) {
                // Viene de Productos que de deja seleccionar la cantidad - entoces remplazo si existe el producto
                item[Id].cantidad = Cant;
                setCarrito(item);
                // setAlert({
                //     ...alert,
                //     msj: `El Producto - ${Produto.titulo} - fue Modficiado en el carrito de Compras - Cantidad ${item[Id].cantidad}`,
                //     severity: "success",
                //     open: true,
                // });
                return;
            }
            if (Produto.cantidad >= item[Id].cantidad + Cant) {
                item[Id].cantidad += 1;
                setCarrito(item);
                setAlert({
                    ...alert,
                    msj: `El Producto - ${Produto.titulo} - fue Agregado al carrito de Compras - Cantidad ${item[Id].cantidad}`,
                    severity: "success",
                    open: true,
                });
            } else {
                setAlert({
                    ...alert,
                    msj: `No hay stock para el Producto - ${Produto.titulo} - Stock Actual ${Produto.cantidad} Unidades`,
                    severity: "warning",
                    open: true,
                });
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

    const MostrarAlerta = ({
        msj = "Sin Mensaje de Alerta",
        severity = "success",
    }) => {
        setAlert({
            ...alert,
            msj,
            severity,
            open: true,
        });
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
                alert,
                MostrarAlerta,
                setCarrito,
                setModo,
                modo,
            }}
        >
            {children}
            {alert.open ? <Alert state={alert} setState={setAlert} /> : null}
        </FavoritosContext.Provider>
    );
};

export default UseFavoritos;
