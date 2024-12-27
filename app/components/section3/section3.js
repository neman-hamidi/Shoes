import "./section3.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function section3() {
  return (
    <section>
        <div className="text-center mt-5">
          <p className="fs-2 mb-4 fw-bold">بهترین در کار</p>
          <p className="fs-1 fw-bolder text-danger">مشتریان خوشحال</p>
        </div>
        <div>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mySwiper1"
      >
        <SwiperSlide className="section3-slide">
          <div className="h-100 text-center">
            <p className="pt-4">سایتِ بسیار خوبی است</p>
            <div className="mt-5 d-flex justify-content-center"><img src="/images/testimonial-1.png" alt="" /></div>
            <p className="mt-3">مصطفی عزیزی</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="section3-slide">
          <div className="h-100 text-center">
            <p className="pt-4">محصولات متنوع و زیبایی دارید</p>
            <div className="mt-5 d-flex justify-content-center"><img src="/images/testimonial-2.png" alt="" /></div>
            <p className="mt-3">مجید قمری</p>
          </div></SwiperSlide>
        <SwiperSlide className="section3-slide">
        <div className="h-100 text-center">
            <p className="pt-4">محصولات بسیار خوبی است</p>
            <div className="mt-5 d-flex justify-content-center"><img src="/images/testimonial-3.png" alt="" /></div>
            <p className="mt-3">رضا کرمی</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="section3-slide">
        <div className="h-100 text-center">
            <p className="pt-4">کیفیت عالی و فوق العاده راحت</p>
            <div className="mt-5 d-flex justify-content-center"><img src="/images/testimonial-1.png" alt="" /></div>
            <p className="mt-3">حمید حیدری</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="section3-slide">
        <div className="h-100 text-center">
            <p className="pt-4">بسیار عالی و مناسب </p>
            <div className="mt-5 d-flex justify-content-center"><img src="/images/testimonial-2.png" alt="" /></div>
            <p className="mt-3">جواد همتی</p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </section>
  )
}
