import React, { useContext, useEffect, useState } from "react";
import FavoritosContext from "@/context/FavoritosContext";
import ApiContext from "@/context/ApiContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MenuIcon from "@mui/icons-material/Clear";
import Producto from "../carrito/Produto";
import MercadoPago from "./mercadoPago";

const Carrito = () => {
    const { carrito } = useContext(FavoritosContext);
    const { BuscarProducto } = useContext(ApiContext);

    const [cantidad, setCantidad] = useState(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setCantidad(carrito.length);
    }, [carrito]);

    return (
        <>
            <button
                data-quantity={`${cantidad}`}
                className="btn-cart flex justify-center items-center z-[200]"
                onClick={handleOpen}
            >
                <svg
                    className="icon-cart"
                    viewBox="0 0 24.38 30.52"
                    height="30.52"
                    width="24.38"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Carrito</title>
                    <path
                        transform="translate(-3.62 -0.85)"
                        d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
                    ></path>
                </svg>
                <span className="quantity"></span>
            </button>

            <Modal open={open} onClose={handleClose}>
                <div className="Borde_Degradado absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:h-[80%] h-[90%] rounded-sm w-[95%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
                    <Box
                        id={"ScrollProducto"}
                        className=" bg-[--Carrito-Color] w-full h-full flex flex-col  items-center  relative overflow-auto "
                    >
                        <h1 className="text-2xl font-extrabold mt-4 text-[--Texto-Color]">
                            Carrito de Compras
                        </h1>

                        {carrito.length == 0 ? null : (
                            <div className="flex flex-col justify-start items-center w-[100%]">
                                {carrito.map((item, index) => {
                                    return (
                                        // Producto Carrito
                                        <Producto
                                            key={index}
                                            P_Original={BuscarProducto(item.id)}
                                            P_Carrito={item}
                                            CloseModal={handleClose}
                                        />
                                    );
                                })}
                            </div>
                        )}

                        {/* Icono X */}
                        <div className="absolute flex right-0 top-0  m-2">
                            <button
                                className="text-[--Texto-Color]"
                                onClick={handleClose}
                            >
                                <MenuIcon sx={{ fontSize: 35 }} />
                            </button>
                        </div>

                        {/* Boton mercado pago */}
                        {cantidad != 0 ? (
                            <MercadoPago productos={carrito} />
                        ) : (
                            <h1 className=" text-rose-400">
                                No hay productos en el carrito
                            </h1>
                        )}
                    </Box>
                </div>
            </Modal>
        </>
    );
};

export default Carrito;
