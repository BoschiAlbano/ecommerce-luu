import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EyeIcon from "@mui/icons-material/RemoveRedEye";
import Link from "next/link";
import FavoritosContext from "@/context/FavoritosContext";

const Producto = ({ P_Carrito = {}, P_Original = {}, CloseModal }) => {
    const [value, setValue] = useState(P_Carrito.cantidad);
    const { handleCarritoDelete, handleCarrito } = useContext(FavoritosContext);

    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value);

        if (isNaN(newValue)) {
            setValue("");
        }

        // No permite valores negativos
        if (
            !isNaN(newValue) &&
            newValue >= 1 &&
            newValue <= P_Original.cantidad
        ) {
            setValue(newValue);
        }

        // mmodificar de local Storage
        handleCarrito(P_Original, newValue, true);
    };

    const Eliminar = () => {
        handleCarritoDelete(P_Original.id);
    };

    return (
        <div className="Grilla_Carrito items-center gap-4 my-4 hover:bg-[#a8a8a8bd] p-2 w-full">
            {/* Imagen */}
            <img
                src={P_Original.imagen}
                alt={P_Original.titulo}
                className=" w-[100%] item1 "
            />
            {/* Titulo del Producto */}
            <div className="font-semibold text-sm sm:text-xl w-[100%] h-full item2 text-[--Texto-Color] flex items-center gap-6">
                <h1>{P_Original.titulo}</h1>
                <h1 className=" font-bold">{`$ ${P_Original.precio}`}</h1>
            </div>

            {/* Cantidad */}
            <div className="flex flex-row items-center h-[3rem] gap-1 w-[100%] item3 ">
                <TextField
                    className="w-[100%]"
                    label={
                        P_Original.cantidad == 0
                            ? "sin Stock"
                            : `Stock ${P_Original.cantidad} Unidades`
                    }
                    type="number"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={P_Original.cantidad == 0 ? 0 : value}
                    color={P_Original.cantidad == 0 ? "error" : "primary"}
                    inputProps={{
                        style: {
                            height: "3rem",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                        },
                        min: 1, // Establece el valor mínimo a 1
                        max: 11,
                        inputMode: "none", // Desactiva la entrada de texto
                    }}
                />
                {/* Eliminar */}
                <div onClick={() => Eliminar()}>
                    <DeleteIcon className=" text-[var(--Texto-Color)] cursor-pointer" />
                </div>
                {/* Eliminar */}
                <div onClick={() => CloseModal()}>
                    <Link href={`/producto/${P_Original.id}`}>
                        <EyeIcon className="text-[var(--Texto-Color)]" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Producto;
