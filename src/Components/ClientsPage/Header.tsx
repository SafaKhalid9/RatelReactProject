import { Link } from "react-router-dom";
import { LogoImage } from "@/assets";
import { useAuth } from "@/Contexts/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <header
      className="sticky top-0 z-50 
                   flex justify-between items-center 
                   px-8 bg-(--background-page)"
    >
      <div className="flex items-center gap-3">
        <Link to="/home">
          <img className="w-25 cursor-pointer" src={LogoImage} alt="icon" />
        </Link>
      </div>

      <nav className="flex gap-4 text-(--font-title-label-color) items-center">
        <Link
          to="/home"
          className="font-bold text-lg hover:text-(--dark-green) transition"
        >
          الرئيسية
        </Link>

        <a
          href="#stats"
          className="font-bold text-lg hover:text-(--dark-green) transition"
        >
          الإحصائيات
        </a>

        <a
          href="#about"
          className="font-bold text-lg hover:text-(--dark-green) transition"
        >
          عن المركز
        </a>

        <a
          href="#why-us"
          className="font-bold text-lg hover:text-(--dark-green) transition"
        >
          لماذا نحن
        </a>

        <a
          href="#news"
          className="font-bold text-lg hover:text-(--dark-green) transition"
        >
          الأنشطة
        </a>

        <a
          href="#testimonials"
          className="font-bold text-lg hover:text-(--dark-green) transition"
        >
          آراء أولياء الأمور
        </a>

        <a
          href="#faq"
          className="font-bold text-lg hover:text-(--dark-green) transition"
        >
          الأسئلة الشائعة
        </a>

        {user ? (
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded font-semibold text-lg
              bg-(--primary) text-(--white-color)
              transition-all duration-300 ease-in-out
              hover:bg-secondary hover:scale-105 hover:shadow-lg"
          >
            لوحة التحكم
          </Link>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 rounded font-semibold
              bg-(--primary) text-(--white-color)
              transition-all duration-300 ease-in-out
              hover:bg-secondary hover:scale-105 hover:shadow-lg"
          >
            تسجيل الدخول
          </Link>
        )}
      </nav>
    </header>
  );
}
