/* eslint-disable react/jsx-no-undef */
import React from 'react'
import '../Testimonial/Testimonial.css'
import {Pagination,Navigation, Autoplay, EffectFade, EffectCube} from 'swiper/modules'
import {Swiper,SwiperSlide}  from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cube'
const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
        <div className="section-content">
            <div className="span">
              <span>
                Clients always get 
                <span>
                Exceptional work 
                </span>
                 from me...
              </span>
            </div>
            <Swiper
            modules={[Pagination,Navigation,Autoplay,EffectFade,EffectCube]}
            navigation
            effect='fade'
            slidesPerView={1}
            pagination={{clickable:false}}
            autoplay={{
              delay:5000,
              
            }}
            >
              <SwiperSlide>okay1</SwiperSlide>
              <SwiperSlide
             className='ye'
              >okay2</SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonial