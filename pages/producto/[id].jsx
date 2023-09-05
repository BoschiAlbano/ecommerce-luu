import React, { useState } from 'react';
import Menu from '@/components/menu';
import { useRouter } from 'next/router';
import ProductoImg from '@/components/swiperjs';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField } from '@mui/material';

import Agregar from '@/components/bonones/agregar';

const Producto = () => {
    const router = useRouter();
    const { id } = router.query;

    const [value, setValue] = useState(1);

    // traer imagenes de api con id del producto

    const handleInputChange = (event) => {
        const newValue = parseInt(event.target.value);

        if (isNaN(newValue)) {
            setValue('');
        }

        // No permite valores negativos
        if (!isNaN(newValue) && newValue >= 1 && newValue <= 11) {
            setValue(newValue);
        }
    };

    return (
        <Menu>
            <div className="h-[100%] flex justify-center items-center">
                <div className="contenedor-Producto gap-2">
                    <section className="overflow-hidden h-full flex flex-col gap-2">
                        <ProductoImg />
                    </section>

                    <Card className="bg-[#ffffff4d] h-full rounded-xl">
                        <CardContent
                            className="h-full w-full flex flex-col sm:gap-10 gap-3 items-center overflow-y-scroll"
                            id={'ScrollProducto'}
                        >
                            <h1 className="font-[roboto] font-extrabold sm:text-3xl text-2xl ">
                                Nombre de Prodcuto
                            </h1>

                            <h1 className="font-[roboto] sm:text-lg text-sm">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Provident, molestias suscipit
                                dolor rem animi placeat ipsam corrupti,
                                molestiae natus non, explicabo iusto iste cum
                                veniam culpa unde cupiditate odit quibusdam?
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Provident, molestias suscipit
                                dolor rem animi placeat ipsam corrupti,
                                molestiae natus non, explicabo iusto iste cum
                                veniam culpa unde cupiditate odit quibusdam?
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Provident, molestias suscipit
                                dolor rem animi placeat ipsam corrupti,
                                molestiae natus non, explicabo iusto iste cum
                                veniam culpa unde cupiditate odit quibusdam?
                                Lorem, ipsum dolor sit amet consectetur
                            </h1>

                            <div className="w-[90%] flex h-[3rem] gap-2">
                                <TextField
                                    className="w-[50%]"
                                    id="outlined-number"
                                    label="Cantidad"
                                    type="number"
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    value={value}
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

                                <div className="w-[50%]">
                                    <Agregar></Agregar>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Menu>
    );
};

export default Producto;
