import React, { useState } from 'react';
import { TextField } from '@mui/material';

const Producto = ({ P_Carrito = {}, P_Original = {} }) => {
    const [value, setValue] = useState(P_Carrito.cantidad);

    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value);

        if (isNaN(newValue)) {
            setValue('');
        }

        // No permite valores negativos
        if (
            !isNaN(newValue) &&
            newValue >= 1 &&
            newValue <= P_Original.cantidad
        ) {
            setValue(newValue);
        }
    };

    return (
        <div className="flex flex-row justify-between items-center gap-4 my-4 hover:bg-[#a8a8a8bd] p-2">
            <img
                src={P_Original.imagen}
                alt={P_Original.titulo}
                className="w-[100px]"
            />

            <h1>{P_Original.titulo}</h1>

            <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]  flex h-[3rem] gap-2">
                <TextField
                    className="w-[100%]"
                    id="outlined-number"
                    label={
                        P_Original.cantidad == 0
                            ? 'sin Stock'
                            : `Stock ${P_Original.cantidad} Unidades`
                    }
                    type="number"
                    variant="outlined"
                    onChange={handleInputChange}
                    value={P_Original.cantidad == 0 ? 0 : value}
                    color={P_Original.cantidad == 0 ? 'error' : 'primary'}
                    inputProps={{
                        style: {
                            height: '3rem',
                            paddingTop: '0px',
                            paddingBottom: '0px',
                            paddingLeft: '1rem',
                            paddingRight: '1rem',
                        },
                        min: 1, // Establece el valor mínimo a 1
                        max: 11,
                        inputMode: 'none', // Desactiva la entrada de texto
                    }}
                />
            </div>
        </div>
    );
};

export default Producto;
