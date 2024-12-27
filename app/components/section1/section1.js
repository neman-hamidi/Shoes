import "./section1.css";
import { useState, useEffect } from "react";
export default function section1() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      const xOffset = (window.innerWidth / 2 - event.clientX) * -0.05;
      const yOffset = (window.innerHeight / 2 - event.clientY) * -0.05;
      setPosition({ x: xOffset, y: yOffset });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.1s ease-out",
          width: "500px",
          height: "500px",
          position: "relative",
          right: "55rem",
          top: "6rem",
        }}
      >
        <img src="/images/shoes.png" alt="" />
      </div>
      <div className="text-section1">
        <p className="fw-bold fs-1">ویژه</p>
        <p className="py-3 fs-2 fw-bold text-danger">کفش ورزشی ایر مکس</p>
        <p className="fs-4">یکی از محبوب ترین کفش های سال</p>
        <button type="submit" className="btn-1">مشاهده بیشتر</button>
      </div>
    </section>
  );
}
