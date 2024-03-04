import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.css'

const Slider = () => {

    const slides = [
        {
          title: 'https://sngist.org/contents/wp-content/themes/sngist18/assets/img/slides/slide_1.jpg',
          content: 'Content for Slide 1',
        },
        {
          title: 'https://sngist.org/contents/wp-content/themes/sngist18/assets/img/slides/slide_3.jpg',
          content: 'Content for Slide 2',
        },
        {
          title: 'https://sngist.org/contents/wp-content/themes/sngist18/assets/img/slides/slide_4.jpg',
          content: 'Content for Slide 3',
        },
      ];

  return (
    <>
    <div className={styles.sliderWrapper}>
        {slides.map((slide) => (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      autoplay={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >

        <SwiperSlide><img src={slide.title} alt={slide.content} /></SwiperSlide>
     
    </Swiper>
    ))

    }
    </div>
    </>
  )
}

export default Slider