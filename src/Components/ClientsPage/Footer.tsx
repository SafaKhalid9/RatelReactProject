import logo from "../../../public/logo2.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className="bg-(--primary) text-(--white-color) pt-12 pb-6 px-8 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Logo" className="w-34 mb-4" />
          <p className="text-lg font-bold opacity-80 leading-relaxed max-w-xs">
            مركز رتل لتحفيظ القرآن الكريم، منارة علمية تربوية تسعى إلى تعليم
            كتاب الله وتربية النفوس على هديه.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-5">
          <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
          <nav className="flex flex-col gap-3 text-lg">
            <HashLink smooth to="/home#top" className="hover:text-secondary transition-colors">
              الرئيسية
            </HashLink>
            
            <HashLink smooth to="/home#stats" className="hover:text-secondary transition-colors">
              الإحصائيات
            </HashLink>
            
            <HashLink smooth to="/home#news" className="hover:text-secondary transition-colors">
              الأخبار
            </HashLink>
            
            <HashLink smooth to="/home#about" className="hover:text-secondary transition-colors">
              عن المركز
            </HashLink>
          </nav>
        </div>
        <div className="flex flex-col items-center text-center mt-5">
          <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
          <div className="flex flex-col items-center gap-2 text-sm mb-4">
            
            <p className="flex flex-row-reverse items-center gap-2">
              <FaEnvelope className="text-secondary" />
              <span className="ltr">info@ratl-center.com</span>
            </p>

            <p className="flex flex-row-reverse items-center gap-2">
              <FaPhoneAlt className="text-secondary" />
              <span className="ltr">+967 777 777 777</span>
            </p>
            
          </div>
          
          <div className="flex gap-5 text-xl">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <FaGlobe />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-lg font-bold opacity-70 border-t border-(--light-green) pt-4">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} مركز رتل لتحفيظ القرآن الكريم
      </div>
    </footer>
  );
}