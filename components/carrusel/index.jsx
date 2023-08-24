import React, { useState, useEffect } from 'react';

import BsChevronCompactLeft from '@mui/icons-material/KeyboardArrowLeftOutlined';
import BsChevronCompactRight from '@mui/icons-material/KeyboardArrowRightOutlined';

const slides = [
  {
    url: 'https://ensarqmurbpfpgwpynqp.supabase.co/storage/v1/object/public/carrusel/img1.jpg',
  },
  {
    url: 'https://ensarqmurbpfpgwpynqp.supabase.co/storage/v1/object/public/carrusel/img2.jpg',
  },
  {
    url: 'https://ensarqmurbpfpgwpynqp.supabase.co/storage/v1/object/public/carrusel/img3.jpg',
  },

  {
    url: 'https://ensarqmurbpfpgwpynqp.supabase.co/storage/v1/object/public/carrusel/img4.jpg',
  }
];

function Carrusel() {


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia la imagen cada 5 segundos (ajusta el valor según lo que desees)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [currentIndex]);


  return (
    <div className='relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Izquierda */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Derecha */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Botones */}
      <div className='hidden group-hover:flex  absolute bottom-1 left-[45%] justify-center py-2 gap-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer h-3 w-3 rounded-full bg-black border-[2px] border-white'
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;