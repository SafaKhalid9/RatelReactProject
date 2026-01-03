import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const getStoredToken = () =>
        localStorage.getItem('token') || sessionStorage.getItem('token');

    const [token, setToken] = useState(getStoredToken);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password, userType, rememberMe) => {
        if (!email || !password || !userType) {
            throw new Error('الرجاء تعبئة كل الحقول');
        }

        try {
            const res = await api.post(
                'https://ratil.tryasp.net/api/auth/login',
                { email, password, roleType: userType, rememberMe },
                { headers: { 'Content-Type': 'application/json' } },
            );

            const tokenFromServer = res.data.data?.token;
            const roleFromServer = res.data.data?.selectedRole;
            const userData = res.data.data;

            if (!tokenFromServer) throw new Error('لم يصدر توكن من السيرفر');

            if (rememberMe) {
                localStorage.setItem('token', tokenFromServer);
            } else {
                sessionStorage.setItem('token', tokenFromServer);
            }
            setToken(tokenFromServer);

            setUser({ ...userData, selectedRole: roleFromServer });

            return true;
        } catch (err) {
            console.error(err.response?.data || err.message);
            throw new Error(
                err.response?.data?.message || 'بيانات الدخول غير صحيحة',
            );
        }
    };
    const logout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const fetchUser = async (tokenParam) => {
        try {
            const res = await api.get('/auth/me', {
                headers: { Authorization: `Bearer ${tokenParam || token}` },
            });

            const userData = res.data.data;

            if (!userData) {
                logout();
                return;
            }

            setUser({
                ...userData,
                selectedRole: userData.role || userData.selectedRole,
            });
        } catch (err) {
            if (err.response?.status === 401) {
                logout();
            } else {
                logout();
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const storedToken = getStoredToken();
        if (storedToken) {
            setToken(storedToken);
            fetchUser(storedToken).catch(() => logout());
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
