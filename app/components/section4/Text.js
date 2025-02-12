import RingVolumeIcon from "@mui/icons-material/RingVolume";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contactInfo = [
  {
    id: 1,
    icon: <LocationOnIcon className="icon-section4" />,
    text: "تهران میدان انقلاب",
  },
  {
    id: 2,
    icon: <RingVolumeIcon className="icon-section4 my-3" />,
    text: "0210000000 :شماره تماس",
  },
  {
    id: 3,
    icon: <AlternateEmailIcon className="icon-section4 me-0 ms-1" />,
    text: "info@gmail.com",
  },
];

const socialMediaIcons = [
  { id: 1, icon: <FacebookIcon className="icon-section4" /> },
  { id: 2, icon: <TelegramIcon className="icon-section4" /> },
  { id: 3, icon: <WhatsAppIcon className="icon-section4" /> },
  { id: 4, icon: <LinkedInIcon className="icon-section4" /> },
];

export { socialMediaIcons, contactInfo };
