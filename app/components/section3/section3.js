import "./section3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { testimonials } from "./Text";
export default function section3() {
  return (
    <section>
      <div className="text-center mt-5">
        <p className="fs-2 mb-4 fw-bold">بهترین در کار</p>
        <p className="fs-1 fw-bolder text-danger">مشتریان خوشحال</p>
      </div>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper mySwiper1"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="section3-slide">
              <div className="h-100 text-center">
                <p className="pt-4">{testimonial.text}</p>
                <div className="mt-5 d-flex justify-content-center">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <p className="mt-3">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
