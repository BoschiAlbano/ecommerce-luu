'use client';
import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

import { Productos } from '../DataBaseEjemplo';

import { TextField } from '@mui/material';

import Agregar from '@/components/bonones/agregar';

import CloseIcon from '@mui/icons-material/Close';

// import required modules
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper/modules';

export default function Producto_Img() {
    const [imgChica, setImgChica] = useState(null);
    const [value, setValue] = useState(1);

    // const [modal, setmodal] = useState(false);

    const [modal, setmodal] = useState(false);
    const handleOpen = () => {
        scrollToTop();
        setmodal(true);
    };
    const handleClose = () => setmodal(false);

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

    // Bloquear Scroll de pantalla
    useEffect(() => {
        const bloquearScroll = () => {
            document.body.classList.add('menu-open');
        };

        const habilitarScroll = () => {
            document.body.classList.remove('menu-open');
        };

        if (modal) {
            bloquearScroll();
        } else {
            habilitarScroll();
        }

        return () => {
            habilitarScroll();
        };
    }, [modal]);

    // Subir el Scroll de la pantalla
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="flex flex-col justify-start items-center h-full">
            {/* Carrusel de img */}
            <div className="flex flex-col gap-2 w-[100%] bg-[--Secciones-Color]">
                <Swiper
                    loop={false}
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 10,
                        },
                    }}
                    freeMode={true}
                    watchSlidesProgress={true}
                    navigation={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiperProducto"
                    onSwiper={setImgChica}
                >
                    {Productos.map((item, index) => {
                        return (
                            <SwiperSlide key={index} style={{}}>
                                <img
                                    onDoubleClick={() => handleOpen()}
                                    className="rounded-xl"
                                    src={item.imagen}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            {/* Descripcion del producto */}
            <div className="flex flex-col w-[100%]  gap-10 items-center  px-4 py-10 rounded-xl bg-[--Secciones-Color]">
                {/* Titulo */}
                <h1 className="font-[roboto] font-extrabold sm:text-3xl text-2xl ">
                    Nombre de Prodcuto
                </h1>
                {/* Descripcion */}
                <h1 className="font-[roboto] sm:text-lg text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, molestias suscipit dolor rem animi placeat ipsam
                    corrupti, molestiae natus non, explicabo iusto iste cum
                    veniam culpa unde cupiditate odit quibusdam? Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Provident,
                    molestias suscipit dolor rem animi placeat ipsam corrupti,
                    molestiae natus non, explicabo iusto iste cum veniam culpa
                    unde cupiditate odit quibusdam? Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Provident, molestias suscipit
                    dolor rem animi placeat ipsam corrupti, molestiae natus non,
                    explicabo iusto iste cum veniam culpa unde cupiditate odit
                    quibusdam? Lorem, ipsum dolor sit amet consectetur Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, molestias suscipit dolor rem animi placeat ipsam
                    corrupti, molestiae natus non, explicabo iusto iste cum
                    veniam culpa unde cupiditate odit quibusdam? Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Provident,
                    molestias suscipit dolor rem animi placeat ipsam corrupti,
                    molestiae natus non, explicabo iusto iste cum veniam culpa
                    unde cupiditate odit quibusdam? Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Provident, molestias suscipit
                    dolor rem animi placeat ipsam corrupti, molestiae natus non,
                    explicabo iusto iste cum veniam culpa unde cupiditate odit
                    quibusdam? Lorem, ipsum dolor sit amet consectetur Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, molestias suscipit dolor rem animi placeat ipsam
                    corrupti, molestiae natus non, explicabo iusto iste cum
                    veniam culpa unde cupiditate odit quibusdam? Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Provident,
                    molestias suscipit dolor rem animi placeat ipsam corrupti,
                    molestiae natus non, explicabo iusto iste cum veniam culpa
                    unde cupiditate odit quibusdam? Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Provident, molestias suscipit
                    dolor rem animi placeat ipsam corrupti, molestiae natus non,
                    explicabo iusto iste cum veniam culpa unde cupidit Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, molestias suscipit dolor rem animi placeat ipsam
                    corrupti, molestiae natus non, explicabo iusto iste cum
                    veniam culpa unde cupiditate odit quibusdam? Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Provident,
                    molestias suscipit dolor rem animi placeat ipsam corrupti,
                    molestiae natus non, explicabo iusto iste cum veniam culpa
                    unde cupiditate odit quibusdam? Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Provident, molestias suscipit
                    dolor rem animi placeat ipsam corrupti, molestiae natus non,
                    explicabo iusto iste cum veniam culpa unde cupiditate odit
                    quibusdam? Lorem, ipsum dolor sit amet consecteturate odit
                    quibusdam? Lorem, ipsum dolor sit amet consectetur
                </h1>

                {/* Cantidad - Agregar Carrito */}
                <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]  flex h-[3rem] gap-2">
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
            </div>

            {/* Visor de img */}
            <div
                onClick={() => handleClose()}
                className={`absolute bg-[--Transparente2] z-[1000] top-0 right-0 w-full h-screen flex-col justify-center items-center ${
                    modal ? 'flex' : 'hidden'
                }`}
            >
                <CloseIcon
                    onClick={() => handleClose()}
                    className="text-white absolute w-[50px] h-[50px] right-0 top-0 z-10 cursor-pointer pr-2 pt-2"
                ></CloseIcon>

                <div className="w-[100%] h-[80%] relative">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#ffffff4d',
                            '--swiper-pagination-color': '#ffffff4d',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{
                            swiper:
                                imgChica && !imgChica.destroyed
                                    ? imgChica
                                    : null,
                        }}
                        modules={[FreeMode, Navigation, Thumbs, Zoom]}
                        className="mySwiperVisor rounded-xl"
                        zoom={true}
                    >
                        {Productos.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div
                                        id="zoom"
                                        className="swiper-zoom-container"
                                    >
                                        <img
                                            className="rounded-xl object-fill"
                                            src={item.imagen}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
