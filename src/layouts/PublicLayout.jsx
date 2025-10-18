import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
    return (
    <>
        <Header />
        <main>
            <Outlet /> {/* هنا تظهر صفحات مثل Home و Login */}
        </main>
        <Footer />
    </>
    );
}
