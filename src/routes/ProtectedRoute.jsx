import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext.jsx';

function FullPageLoader() {
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20px',
                color: 'var(--primary)',
            }}
        >
            جاري التحقق...
        </div>
    );
}

export default function ProtectedRoute({ allowedRoles = [] }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <FullPageLoader />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user.selectedRole)) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
