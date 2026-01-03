import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/Dashboard/DashboardHome';
import ManahgesIndex from './pages/Dashboard/ManahgesIndex';
import HalagatIndex from './pages/Dashboard/HalagatIndex';

import ManhajDetails from './pages/Dashboard/manahj/ManhajDetails';
import ManhajDelete from './pages/Dashboard/manahj/ManhajDelete';
import MemorizationPathCreate from './pages/Dashboard/Paths/MemorizationPathCreate';
import MemorizationPathEdit from './pages/Dashboard/Paths/MemorizationPathEdit';

import PublicLayout from './layouts/PublicLayout';
import HomeIndex from './pages/Home/HomeIndex';
import LoginPage from './pages/Home/LoginPage';

import { ManhajProvider } from './Contexts/ManhajContext';
import { HalaqatProvider } from './Contexts/HalaqatContext';

import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider, useAuth } from './Contexts/AuthContext.jsx';

import './styles/variables.css';

function HomeRedirectWrapper() {
    const { user, loading } = useAuth();

    if (loading)
        return (
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                جاري التحقق...
            </div>
        );

    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return <HomeIndex />;
}

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route element={<PublicLayout />}>
                        <Route path="/" element={<HomeRedirectWrapper />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Route>

                    <Route
                        element={<ProtectedRoute allowedRoles={['أداري']} />}
                    >
                        <Route path="dashboard" element={<DashboardLayout />}>
                            <Route index element={<DashboardHome />} />

                            <Route
                                path="ManahgesIndex"
                                element={
                                    <ManhajProvider>
                                        <ManahgesIndex />
                                    </ManhajProvider>
                                }
                            />

                            <Route
                                path="HalagatIndex"
                                element={
                                    <HalaqatProvider>
                                        <HalagatIndex />
                                    </HalaqatProvider>
                                }
                            />

                            <Route
                                path="manhajs/:id"
                                element={<ManhajDetails />}
                            />
                            <Route
                                path="manhajs/:id/delete"
                                element={<ManhajDelete />}
                            />
                            <Route
                                path="paths/create"
                                element={<MemorizationPathCreate />}
                            />
                            <Route
                                path="paths/:id/edit"
                                element={<MemorizationPathEdit />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}
