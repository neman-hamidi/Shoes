import "./section4.css";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function section4() {
  return (
    <section className="section4">
      <div className="question-section4">
        <p className="fs-2 fw-bold">سوال؟</p>
        <p className="fs-2 fw-bold text-danger mt-3">سوالات خود را بپرسید؟</p>
      </div>
      <div className="div-section4">
        <div className="form-section4">
          <form>
            <input type="text" placeholder="نام خود را بنویسید" />
            <input type="text" placeholder="موضوع سوال" />
            <input type="text" placeholder="ایمیل خود را وارد کنید" />
            <textarea name="" id="" rows={5} placeholder="سوال خود را بپرسید"></textarea>
            <button type="submit" className="btn-1">ارسال اطلاعات</button>
          </form>
        </div>
        <div className="m-auto">
          <p className="fs-2 mb-5">موقعیت فروشگاه</p>
          <p className="mb-4">
            راه های زیادی برای آمدن به فروشگاه است مثلا استفاده از کوچه های فرعی
          </p>
          <div>
            <p>
              <LocationOnIcon className="icon-section4" /> تهران میدان انقلاب
            </p>
            <p className="my-4">
               0210000000 :شماره تماس 
              <RingVolumeIcon className="icon-section4 me-2" />
            </p>
            <p className="mb-4">
              <AlternateEmailIcon className="icon-section4 me-0 ms-1" />
              info@gmail.com
            </p>
          </div>
          <div className="socialMedia-section4">
            <div>
              <FacebookIcon className="icon-section4" />
            </div>
            <div>
              <TelegramIcon className="icon-section4"/>
            </div>
            <div>
              <WhatsAppIcon className="icon-section4"/>
            </div>
            <div>
              <LinkedInIcon className="icon-section4"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
