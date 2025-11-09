import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

import './styles/variables.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<HomeIndex />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <ManhajProvider>
                 <Route path="ManahgesIndex" element={<ManahgesIndex />} />
          </ManhajProvider>
          <HalaqatProvider>
                  <Route path="HalagatIndex" element={<HalagatIndex />} />
          </HalaqatProvider>
          {/* <Route path="settings" element={<Settings />} /> */}
          <Route path="/manhajs/:id" element={<ManhajDetails />} />
          <Route path="/manhajs/:id/delete" element={<ManhajDelete />} />
          <Route path="/paths/create" element={<MemorizationPathCreate />} />
          <Route path="paths/:id/edit" element={<MemorizationPathEdit />} />
        </Route>
      </Routes>
    </Router>
  );
}
