import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

// import required modules
import {
    Keyboard,
    Pagination,
    Autoplay,
    Navigation,
    Scrollbar,
} from 'swiper/modules';

export default function Carrusel2({ slides }) {
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                keyboard={{
                    enabled: true,
                }}
                navigation={true}
                modules={[
                    Keyboard,
                    Pagination,
                    Autoplay,
                    Navigation,
                    Scrollbar,
                ]}
                scrollbar={{ draggable: true }}
                className="mySwiperCarrusel"
            >
                {slides.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={item.url} alt={item.url} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
