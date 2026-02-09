import { Link } from "react-router-dom";
import logo from "../../../public/logo2.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--primary) text-(--white-color) pt-12 pb-6 px-8 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Logo" className="w-34" />
          <p className="text-start text-sm opacity-80 leading-relaxed max-w-xl">
            مركز رتل لتحفيظ القرآن الكريم، منارة علمية تربوية تسعى إلى تعليم
            كتاب الله وتربية النفوس على هديه.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
          <nav className="flex flex-col gap-3 text-sm">
            <Link to="/home" className="hover:text-secondary transition-colors">
              الرئيسية
            </Link>
            <a href="#stats" className="hover:text-secondary transition-colors">
              الإحصائيات
            </a>
            <a href="#news" className="hover:text-secondary transition-colors">
              الأخبار
            </a>
            <a href="#about" className="hover:text-secondary transition-colors">
              عن المركز
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaEnvelope className="text-secondary" />
            info@ratl-center.com
          </p>
          <p className="flex items-center gap-2 text-sm mb-4">
            <FaPhoneAlt className="text-secondary" />
            +967 777 777 777
          </p>
          <div className="flex gap-5 text-xl">
            <a href="#" className="hover:text-secondary transition-colors">
              <FaGlobe />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* خط سفلي */}
      <div className="mt-12 text-center text-sm opacity-70 border-t border-(--light-green) pt-4">
        © {new Date().getFullYear()} مركز رتل لتحفيظ القرآن الكريم. جميع الحقوق
        محفوظة.
      </div>
    </footer>
  );
}
