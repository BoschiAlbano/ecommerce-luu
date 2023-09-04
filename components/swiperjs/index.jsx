import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
// import 'swiper/css/pagination';

const imgs = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
    'https://swiperjs.com/demos/images/nature-10.jpg',
];

// import required modules
import { FreeMode, Navigation, Thumbs, Zoom } from 'swiper/modules';

export default function Producto_Img() {
    const thumbsSwiper = useRef(null);
    const mainSwiper = useRef(null);

    // Configurar el Swiper de los pulgares
    // useEffect(() => {
    //     if (thumbsSwiper.current !== null) {
    //     }
    // }, [thumbsSwiper]);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#ffffff4d',
                    '--swiper-pagination-color': '#ffffff4d',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper.current }}
                modules={[FreeMode, Navigation, Thumbs, Zoom]}
                // pagination={{ clickable: true }}
                className="mySwiper2 rounded-xl"
                onSwiper={(swiper) => {
                    // Asignar la instancia de Swiper principal a la referencia
                    mainSwiper.current = swiper;
                }}
                zoom={true}
            >
                {imgs.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div id="zoom" className="swiper-zoom-container">
                                <img className="rounded-xl" src={item} />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper rounded-xl"
                onSwiper={(swiper) => {
                    // Asignar la instancia de Swiper de los pulgares a la referencia
                    thumbsSwiper.current = swiper;
                }}
            >
                {imgs.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img className="rounded-xl" src={item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
