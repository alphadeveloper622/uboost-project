'use client'
import { useRef, useState } from 'react';
import testimonialData from "./testimonialData";
import SectionTitle from '../Common/SectionTitle';
import SingleTestimonial from './SingleTestimonial';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Testimonials = () => {
  const selectedRef = useRef<HTMLElement | null>(null);
  const [index, setIndex] = useState(0);

  return (
    <section className='bg-gradient-to-t from-ublue-400/60 to-ublue-100 py-2 pt-10 lg:pb-16 lg:pt-20'>
      <SectionTitle
        subtitle=""
        title="What our Fundraiser Say"
        paragraph="Listen to their sincere confessions of support and support."
        width="640px"
        center
      />

      <div className="w-full h-full m-6 pr-12 md:px-12 lg:px-24 xl:px-32 2xl:px-40 3xl:px-52 mt-16 mb-16 overflow-hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 50,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {testimonialData.map((testimonial, key) => (
            <SwiperSlide key={testimonial.id}>
              <SingleTestimonial testimonial={testimonial}/>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;
