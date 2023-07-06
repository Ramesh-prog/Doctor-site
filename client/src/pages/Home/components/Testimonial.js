// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import woman from '../../../assets/medical_one.jpg';
import client1 from '../../../assets/pic1.jpeg';
import client2 from '../../../assets/pic2.jpeg';
import client3 from '../../../assets/pic3.jpeg';
import client4 from '../../../assets/pic4.jpeg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialSection = () => {

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={client1} />
          <h1>Kiran Sahu</h1>
          <p>I just wanted to share a quick note and let you know that Dr. Bishnu sir doing really good job. I'm glad to say that i really apprecite hos treatment. The way he treate and manage everything is really amazing</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={woman} />
          <h1>Kimm sam</h1>
          <p>I just wanted to share a quick note and let you know that Dr. Bishnu sir doing really good job. I'm glad to say that i really apprecite hos treatment. The way he treate and manage everything is really amazing</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={client2} />
          <h1>Pradeep Kumar Sutar</h1>
          <p>I just wanted to share a quick note and let you know that Dr. Bishnu sir doing really good job. I'm glad to say that i really apprecite hos treatment. The way he treate and manage everything is really amazing</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={client3} />
          <h1>Gatipana Das</h1>
          <p>I just wanted to share a quick note and let you know that Dr. Bishnu sir doing really good job. I'm glad to say that i really apprecite hos treatment. The way he treate and manage everything is really amazing</p>

        </SwiperSlide>
        <SwiperSlide>
          <img className='slider_image' alt='woman' src={client4} />
          <h1>Suren Sahu</h1>
          <p>I was suffering from severe spondylitis pain in my neck and I have been cured  by Dr.Bishnu sir treatment and his prescribed medicine. Thank you to Dr.Bishnu sir for his expertise in the treatment of spondylitis.</p>
        </SwiperSlide>

      </Swiper>
    </div>

  );

};

export default TestimonialSection;