import React from "react";

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import {Slide} from './sliderStyle'


SwiperCore.use([Navigation, Pagination, Autoplay]);

export default () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <Slide className='one'><span>Мы можем хранить любые данные</span></Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide className='two'><span>Надежная защита</span></Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide className='three'><span>Развитие</span></Slide>
            </SwiperSlide>
        </Swiper>
    );
  };