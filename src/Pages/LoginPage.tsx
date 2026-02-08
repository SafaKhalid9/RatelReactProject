import React, { useState } from "react";
import { FaLock, FaEnvelope, FaEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    const newErrors: typeof errors = {};

    if (!email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!password) newErrors.password = "كلمة المرور مطلوبة";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      await login(email, password, rememberMe);
      navigate("/dashboard");
    } catch (err: any) {
      setErrors({
        general: err.message || "بيانات الدخول غير صحيحة",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputBaseClasses = `
    w-full h-[44px] bg-white rounded-md text-[15px]
    outline-none pr-12 pl-[0.75rem] border
    focus:border-[var(--secondary)] placeholder:text-[var(--primary)]
    text-[var(--primary)]
  `;

  const iconClasses = `
    absolute right-3 top-1/2 -translate-y-1/2
    text-[var(--primary)] pointer-events-none
  `;

  return (
    <section className="min-h-screen flex items-center justify-center bg-(--background-page) rtl font-['Cairo'] relative px-4">
      {isLoading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div
        className="relative bg-(--light-green) px-6 sm:px-12 py-8 sm:py-10 rounded-[12px] shadow-[0_0_15px_rgba(0,0,0,0.15)] 
                      w-full max-w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%]"
      >
        <button
          onClick={() => navigate("/home")}
          className="absolute left-4 top-4 text-(--primary) text-xl font-bold cursor-pointer"
        >
          ✕
        </button>
        <h2 className="flex justify-center items-center text-xl sm:text-2xl text-(--primary) mb-6">
          تسجيل الدخول <FaLock className="mr-2" />
        </h2>

        {errors.general && (
          <p className="text-red-600 text-sm text-center mb-3">
            {errors.general}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <FaEnvelope className={iconClasses} />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              placeholder="البريد الإلكتروني"
              className={`${inputBaseClasses} ${
                errors.email ? "border-red-500" : "border-(--light-brown)"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}

          <div className="relative">
            <FaLock className={iconClasses} />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              placeholder="كلمة المرور"
              className={`${inputBaseClasses} ${
                errors.password ? "border-red-500" : "border-(--light-brown)"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-(--primary) focus:outline-none cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

          <div className="flex items-center">
            <label className="inline-flex items-center gap-2 font-bold text-[1rem] sm:text-[1.1rem] text-(--primary)">
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
            disabled={isLoading}
            className={`
              w-full bg-(--primary) text-(--white-color) py-2.5 rounded-md text-[15px] sm:text-[16px]
              transition-all duration-300
              hover:bg-secondary hover:text-(--black-color)
              hover:shadow-lg hover:scale-[1.02]
              ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
            `}
          >
            {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>

          <a
            href="/forgot-password"
            className="block text-center text-[13px] sm:text-[14px] text-(--primary) hover:text-secondary hover:underline mt-2"
          >
            نسيت كلمة المرور؟
          </a>
        </form>
      </div>
    </section>
  );
}
