import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Tarjeta from './Tarjeta';

export default function Tarjeta2({ Productos }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 25,
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
                id="mySwiperTarjetas"
                // style={{ paddingBottom: '30px' }}
            >
                {Productos.map((item, index) => {
                    return (
                        <SwiperSlide style={{ width: 'initial' }} key={index}>
                            <Tarjeta item={item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
