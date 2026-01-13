import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("الرجاء تعبئة جميع الحقول");
      return;
    }

    try {
      await login(email, password, rememberMe);
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.message || "حدث خطأ غير متوقع");
    }
  };

  const inputBaseClasses = `
    w-full h-[44px] bg-white rounded-md text-[15px]
    outline-none pr-12 pl-[0.75rem] border border-[var(--light-brown)]
    focus:border-[var(--secondary)] placeholder:text-[var(--primary)]
    text-[var(--primary)]
  `;

  const iconClasses = `
    absolute right-3 top-1/2 -translate-y-1/2
    text-[var(--primary)] pointer-events-none
  `;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-page)] rtl font-['Cairo']">
      <div className="bg-[var(--light-green)] px-12 py-10 rounded-[12px] shadow-[0_0_15px_rgba(0,0,0,0.15)] w-[40%] max-w-[90%]">
        <h2 className="flex justify-center items-center text-2xl text-[var(--primary)] mb-6">
          تسجيل الدخول <FaLock className="mr-2" />
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <FaEnvelope className={iconClasses} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="البريد الإلكتروني"
              required
              className={inputBaseClasses}
            />
          </div>

          <div className="relative">
            <FaLock className={iconClasses} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="كلمة المرور"
              required
              className={inputBaseClasses}
            />
          </div>

          <div className="flex items-center">
            <label className="inline-flex items-center gap-2 font-bold text-[1.1rem] text-[var(--primary)]">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              تذكرني
            </label>
          </div>

          <button
            type="submit"
            className="
              w-full bg-[var(--primary)] text-[var(--white-color)] py-[10px] rounded-md text-[16px]
              transition-all duration-300
              hover:bg-[var(--secondary)] hover:text-[var(--black-color)]
              hover:shadow-lg hover:scale-[1.02] cursor-pointer
            "
          >
            تسجيل الدخول
          </button>

          <a
            href="/forgot-password"
            className="block text-center text-[14px] text-[var(--primary)] hover:text-[var(--secondary)] hover:underline mt-2 cursor-pointer"
          >
            نسيت كلمة المرور؟
          </a>
        </form>
      </div>
    </div>
  );
}
