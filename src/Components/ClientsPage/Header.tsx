import { Link } from "react-router-dom";
import logo from "../../../public/logo1.svg";
import { useAuth } from "@/Contexts/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-(--background-page)">
      <div className="flex items-center gap-3">
        <Link to="/home">
          <img className="w-25 cursor-pointer" src={logo} alt="icon" />
        </Link>
      </div>
      <nav className="flex gap-6 text-(--font-title-label-color)">
        <Link
          to="/home"
          className="font-bold text-lg mt-2 hover:text-(--dark-green) cursor-pointer"
        >
          الرئيسية
        </Link>
        <a
          href="#stats"
          className="font-bold text-lg mt-2 hover:text-(--dark-green) cursor-pointer"
        >
          الإحصائيات
        </a>
        <a
          href="#news"
          className="font-bold text-lg mt-2 hover:text-(--dark-green) cursor-pointer"
        >
          الأخبار
        </a>
        <a
          href="#about"
          className="font-bold text-lg mt-2 hover:text-(--dark-green) cursor-pointer"
        >
          عن المركز
        </a>
        {user ? (
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded font-semibold text-lg
              bg-(--primary) text-(--white-color)
              transition-all duration-300 ease-in-out
              hover:bg-secondary hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            لوحة التحكم
          </Link>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 rounded font-semibold 
              bg-(--primary) text-(--white-color)
              transition-all duration-300 ease-in-out
              hover:bg-secondary hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            تسجيل الدخول
          </Link>
        )}
      </nav>
    </header>
  );
}
