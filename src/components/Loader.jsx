import React from 'react'
import AnimatedText from 'react-animated-text-content'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";
import { About, Blog, Contact, Home, Portfolio, Services } from '../pages';

const Loader = () => {
  return (
    <div className='w-screen h-screen'>
     <AnimatedText
        type='chars'
        interval={0.04}
        duration={1}
        animation={{
            y: '100px',
            scale:1.1,
            ease: 'ease-in',
          }}
          animationType="bounce"
          tag="h5"
          className="animated-paragraph h-full flex font-bold items-center bg-white text-black dark:bg-black dark:text-white justify-center text-center text-6xl "
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
       >
      Olorì Àṣàbí
    </AnimatedText>
    </div>
  )
}

export const Swipers = () => {
    return (
    <div>
    <Swiper
    direction={"horizontal"}
    slidesPerView={1}
    spaceBetween={10}
    mousewheel={true}
    pagination={{
      clickable: true,
    }}
    modules={[Mousewheel, Pagination]}
    className="mySwiper bg-white text-black dark:text-white dark:bg-black"
    >
     <SwiperSlide className='w-screen h-screen' >
     <div className='h-full p-10'>
        <Home/>
     </div>
     </SwiperSlide>
     <SwiperSlide>
        <div  className='h-screen p-10'>
        <About/>
        </div></SwiperSlide>
     <SwiperSlide>
        <div  className='h-screen p-10'>
            <Services/>
        </div>
    </SwiperSlide>
     <SwiperSlide>
        <div  className='h-screen p-10'>
            <Portfolio/>
        </div>
        </SwiperSlide>
     <SwiperSlide>
        <div className='h-screen p-10'>
        <Blog/>
        </div>
        </SwiperSlide>
     <SwiperSlide>
        <div  className='h-screen p-10'>
            <Contact/>
        </div>
        </SwiperSlide>
  </Swiper>
  </div>
)
}

export default Loader