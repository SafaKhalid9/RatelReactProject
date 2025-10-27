import '../styles/variables.css';
import '../styles/layoutStyle.css';

import { Outlet } from 'react-router-dom';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import MobileSidebar from '../components/MobileSidebar';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';

export default function DashboardLayout() {
    return (
        <>
            <div className="container">
                <MobileSidebar />
                <Sidebar />
                <div className="main-container">
                    <DashboardHeader />
                    <Main>
                        <Outlet />
                    </Main>
                </div>
            </div>
            <Footer />
        </>
    );
}
