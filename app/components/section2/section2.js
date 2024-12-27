import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./section2.css";
export default function section2() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev >= 150) {
          clearInterval(interval);
          return 150;
        }
        return prev + 1;
      });
    }, 280);

    const interval2 = setInterval(() => {
      setNumber2((prev) => {
        if (prev >= 92) {
          clearInterval(interval2);
          return 92;
        }
        return prev + 1;
      });
    }, 450);

    const interval3 = setInterval(() => {
      setNumber3((prev) => {
        if (prev >= 290) {
          clearInterval(interval3);
          return 290;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval3);
      clearInterval(interval2);
      clearInterval(interval);
    };
  }, []);
  return (
    <section>
      <div className="section2">
        <div>
          <h3 className="fw-bold fs-2 mb-2">ویژه</h3>
          <h3 className="text-danger fw-bold fs-2">مجموعه کفش</h3>
        </div>
        <div className="intervalSection text-center">
          <div>
            <p className="fs-1">{number}</p>
            <p>کفش تحویل داده شد</p>
          </div>
          <div>
            <p className="fs-1">{number2}</p>
            <p>مقالات جدید</p>
          </div>
          <div>
            <p className="fs-1">{number3}</p>
            <p>مشتریان خوشحال</p>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="div-swiper text-center">
              <img src="/images/product-img1.png" alt="" />
              <p className="text-center mt-4 fw-bold">Solamon Sneakers</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-swiper text-center">
              <img src="/images/product-img2.png" alt="" />
              <p className="text-center mt-4 fw-bold">Nike Air Mag</p>
              <button className="btn-1">مشاهده جزئیات</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-swiper text-center">
              <img src="/images/product-img3.png" alt="" />
              <p className="text-center mt-4 fw-bold">Air Jordan</p>
              <button className="btn-1">مشاهده جزئیات</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-swiper text-center">
              <img src="/images/product-img4.png" alt="" />
              <p className="text-center mt-4 fw-bold">Adidas Consortium</p>
              <button className="btn-1">مشاهده جزئیات</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-swiper text-center">
              <img src="/images/product-img5.png" alt="" />
              <p className="text-center mt-4 fw-bold">Nike Air Mag</p>
              <button className="btn-1">مشاهده جزئیات</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-swiper text-center">
              <img src="/images/product-img6.png" alt="" />
              <p className="text-center mt-4 fw-bold">Solamon Sneakers</p>
              <button className="btn-1">مشاهده جزئیات</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
