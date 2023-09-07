import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Corazon from '../bonones/corazon';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules

export default function Tarjeta2({ Productos }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiperTarjetas"
            >
                {Productos.map((item, index) => {
                    return (
                        <SwiperSlide style={{ width: 'initial' }} key={index}>
                            <div className="opacity-[0.7] hover:opacity-[1] hover:scale-95 transition-all duration-300">
                                <div className="h-[350px] rounded-[0.5rem] bg-[--Transparente] relative shadow-2xl">
                                    <div className="overflow-hidden h-full">
                                        <div className="absolute left-0 top-0 p-2">
                                            <Corazon />
                                        </div>

                                        <Link
                                            href={`/producto/${item.id}`}
                                            className="h-full"
                                        >
                                            <img
                                                src={item.imagen}
                                                alt={item.descripcion}
                                                loading="lazy"
                                                className="rounded-[0.5rem] h-full object-contain"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
