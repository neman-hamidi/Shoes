import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./section2.css";
import { products } from "./Text";
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
    }, 60);

    const interval2 = setInterval(() => {
      setNumber2((prev) => {
        if (prev >= 92) {
          clearInterval(interval2);
          return 92;
        }
        return prev + 1;
      });
    }, 95);

    const interval3 = setInterval(() => {
      setNumber3((prev) => {
        if (prev >= 290) {
          clearInterval(interval3);
          return 290;
        }
        return prev + 1;
      });
    }, 30);

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
            <h3 className="fs-1">{number}</h3>
            <p>کفش تحویل داده شد</p>
          </div>
          <div>
            <h3 className="fs-1">{number2}</h3>
            <p>مقالات جدید</p>
          </div>
          <div>
            <h3 className="fs-1">{number3}</h3>
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="div-swiper text-center">
                <img src={product.imgSrc} alt={product.name} />
                <p className="text-center mt-4 fw-bold">{product.name}</p>
                <button className="btn-1">مشاهده جزئیات</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
