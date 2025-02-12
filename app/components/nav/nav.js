import { useState } from "react";
import "./nav.css";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { navItems, socialIcons } from "./Text";
export default function Nav() {
  const [activeItem, setActiveItem] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav className={`nav ${sidebar && "increaseNav"}`}>
      <div>
        <DehazeOutlinedIcon
          className={`fs-2 ${sidebar && "d-none"}`}
          onClick={() => setSidebar(true)}
        />
      </div>

      {/* Sidebar */}
      <div className={`d-none ${sidebar && "sidebar"}`}>
        <div>
          <CloseIcon onClick={() => setSidebar(false)} />
        </div>
        <div className="text-white text-sidebar">
          {navItems.map((item, index) => (
            <p key={item.id} className={`mb-5 animate-nav${index + 1}`}>
              {item.label}
            </p>
          ))}
        </div>
        <div className="icon-sidebar text-white">
          {socialIcons.map((icon) => (
            <div key={icon.id}>{icon.icon}</div>
          ))}
        </div>
      </div>

      {/* Navigation Items */}
      <div className={`${sidebar && "d-none"}`}>
        {navItems.map((item) => (
          <label
            key={item.id}
            className="nav__item"
            htmlFor={`section${item.id}`}
            onClick={() => setActiveItem(item.id)}
          >
            {activeItem === item.id && (
              <>
                <div className="right-item"></div>
                <div className="left-item"></div>
              </>
            )}
          </label>
        ))}
      </div>

      {/* Logo */}
      <div className={`${sidebar && "d-none"}`}>
        <img src="/images/Neman.webp" alt="imgs" className="img-nav" />
      </div>
    </nav>
  );
}
