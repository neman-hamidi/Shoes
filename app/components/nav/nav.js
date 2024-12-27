import { useState } from "react";
import "./nav.css";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
export default function nav() {
  const [itemSite, setItemSite] = useState(false);
  const [itemSite2, setItemSite2] = useState(false);
  const [itemSite3, setItemSite3] = useState(false);
  const [itemSite4, setItemSite4] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  return (
    <nav className={`nav ${sidebar ? "increaseNav" : ""}`}>
      <div>
        <DehazeOutlinedIcon
          className={`fs-2 ${sidebar ? "d-none" : ""}`}
          onClick={() => {
            setSidebar(true);
          }}
        />
      </div>
      <div className={`d-none ${sidebar ? "sidebar" : ""}`}>
        <div>
          <CloseIcon onClick={() => {
            setSidebar(false);
          }} />
        </div>
        <div className="text-white text-sidebar">
          <p className="mb-5 animate-nav">خانه</p>
          <p className="animate-nav2">محصولات</p>
          <p className="my-5 animate-nav3">نظرات</p>
          <p className="animate-nav4">راه ارتباطی</p>
        </div>
        <div className="icon-sidebar text-white">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <TelegramIcon />
          </div>
          <div className="mt-0">
          <WhatsAppIcon/>
          </div>
          <div>
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className={`${sidebar ? "d-none" : ""}`}>
        <label
          className="nav__item"
          htmlFor="section1"
          onClick={() => {
            setItemSite(true),
              setItemSite2(false),
              setItemSite3(false),
              setItemSite4(false);
          }}
        >
          {itemSite && (
            <>
              <div className="right-item"></div>
              <div className="left-item"></div>
            </>
          )}
        </label>
        <label
          className="nav__item"
          htmlFor="section2"
          onClick={() => {
            setItemSite2(true),
              setItemSite(false),
              setItemSite3(false),
              setItemSite4(false);
          }}
        >
          {itemSite2 && (
            <>
              <div className="right-item"></div>
              <div className="left-item"></div>
            </>
          )}
        </label>
        <label
          className="nav__item"
          htmlFor="section3"
          onClick={() => {
            setItemSite3(true),
              setItemSite2(false),
              setItemSite(false),
              setItemSite4(false);
          }}
        >
          {itemSite3 && (
            <>
              <div className="right-item"></div>
              <div className="left-item"></div>
            </>
          )}
        </label>
        <label
          className="nav__item"
          htmlFor="section4"
          onClick={() => {
            setItemSite4(true),
              setItemSite2(false),
              setItemSite3(false),
              setItemSite(false);
          }}
        >
          {itemSite4 && (
            <>
              <div className="right-item"></div>
              <div className="left-item"></div>
            </>
          )}
        </label>
      </div>

      <div className={`${sidebar ? "d-none" : ""}`}>
        <img src="/images/Neman.webp" alt="" className="img-nav"  />
      </div>
    </nav>
  );
}
