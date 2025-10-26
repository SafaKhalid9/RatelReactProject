import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/Dashboard/DashboardHome';
import ManahgesIndex from './pages/Dashboard/ManahgesIndex';
import HalagatIndex from './pages/Dashboard/ManahgesIndex';

import PublicLayout from './layouts/PublicLayout';
import HomeIndex from './pages/Home/HomeIndex';
import LoginPage from './pages/Home/LoginPage';

import './styles/variables.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<HomeIndex />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route path="dashoard" element={<DashboardLayout />}>
                    <Route index element={<DashboardHome />} />
                    <ManhajProvider>
                        <Route
                            path="ManahgesIndex"
                            element={<ManahgesIndex />}
                        />
                    </ManhajProvider>
                    <HalaqatProvider>
                        <Route path="HalagatIndex" element={<HalagatIndex />} />
                    </HalaqatProvider>
                    {/* <Route path="settings" element={<Settings />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}
