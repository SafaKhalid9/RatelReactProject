import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';

export default function LoginPage() {
    const [userType, setUserType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userType) {
            alert('الرجاء اختيار نوع المستخدم');
            return;
        }

        if (!email || !password) {
            alert('الرجاء تعبئة جميع الحقول');
            return;
        }

        try {
            await login(email, password, userType, rememberMe);
            if (userType === 'أداري') {
                navigate('/dashboard');
            } else {
                navigate('/dashboard');
            }
        } catch (err) {
            alert(err.message);
        }
    };

    const inputBaseClasses = `
    w-full
    h-[44px]
    bg-white
    rounded-md
    text-[15px]
    outline-none
    pr-12
    pl-[0.75rem]
    border
    border-[var(--light-brown)]
    focus:border-[var(--secondary)]
    placeholder:text-[var(--primary)]
    text-[var(--primary)]
  `;

    const iconClasses = `
    absolute
    right-3
    top-1/2
    -translate-y-1/2
    text-[var(--primary)]
    pointer-events-none
  `;

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--background-page)] rtl font-['Cairo']">
            <div className="bg-[var(--light-green)] px-12 py-10 rounded-[12px] shadow-[0_0_15px_rgba(0,0,0,0.15)] w-1/2 max-w-[90%]">
                <h2 className="flex justify-center items-center text-2xl text-[var(--primary)] mb-6">
                    تسجيل الدخول <FaLock className="mr-2" />
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                        <FaUser className={iconClasses} />
                        <select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                            className={`${inputBaseClasses} appearance-none text-[var(--primary)]`}
                        >
                            <option value="" disabled hidden>
                                نوع المستخدم
                            </option>
                            <option value="أداري">أداري</option>{' '}
                            <option value="معلم">معلم</option>
                        </select>
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--primary)]">
                            ▼
                        </span>
                    </div>
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
                    <div className="flex items-center text-[rgb(10,36,0)]">
                        <label className="inline-flex items-center gap-2 font-bold text-[1.1rem] text-[var(--primary)]">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) =>
                                    setRememberMe(e.target.checked)
                                }
                            />
                            تذكرني
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[var(--primary)] text-white py-[10px] rounded-md text-[16px] transition hover:bg-[var(--secondary)]"
                    >
                        تسجيل الدخول
                    </button>
                    <a
                        href="#"
                        className="block text-center text-[14px] text-[var(--primary)] hover:underline"
                    >
                        نسيت كلمة المرور؟
                    </a>
                </form>
            </div>
        </div>
    );
}
