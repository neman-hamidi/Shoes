import "./section4.css";
import { socialMediaIcons, contactInfo } from "./Text";

export default function Section4() {
  return (
    <section className="section4">
      <div className="question-section4">
        <h3 className="fs-2 fw-bold">سوال؟</h3>
        <p className="fs-2 fw-bold text-danger mt-3">سوالات خود را بپرسید؟</p>
      </div>
      <div className="div-section4">
        <div className="form-section4">
          <form>
            <input type="text" placeholder="نام خود را بنویسید" />
            <input type="text" placeholder="موضوع سوال چیست" />
            <input type="text" placeholder="ایمیل خود را وارد کنید" />
            <textarea rows={5} placeholder="سوال خود را بپرسید"></textarea>
            <button type="submit" className="btn-1">
              ارسال اطلاعات
            </button>
          </form>
        </div>
        <div className="m-auto">
          <h3 className="fs-2 mb-5">موقعیت فروشگاه</h3>
          <p className="mb-4">
            راه های زیادی برای آمدن به فروشگاه است مثلا استفاده از کوچه های فرعی
          </p>
          <div>
            {contactInfo.map((info) => (
              <p key={info.id}>
                {info.icon} {info.text}
              </p>
            ))}
          </div>
          <div className="socialMedia-section4 mt-3">
            {socialMediaIcons.map((social) => (
              <div key={social.id}>{social.icon}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
