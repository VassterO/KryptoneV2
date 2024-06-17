import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import './custom-scrollbar.css';

// Import security scripts
import './security/clickjacking_protection';
import './security/rate_limiting';
import './security/SecureRedirect';

const Home = lazy(() => import('./components/Home'));
const Shop = lazy(() => import('./components/Shop'));
const Profile = lazy(() => import('./components/Profile'));
const ItemsWiki = lazy(() => import('./components/ItemsWiki'));
const OurStaff = lazy(() => import('./components/OurStaff'));

const PageWrapper = ({ children, noScroll }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        className={`flex-grow w-full ${noScroll ? 'overflow-hidden' : 'overflow-auto'}`}
    >
        {children}
    </motion.div>
);

const App = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col justify-between">
            <Helmet>
                <title>Kryptone Facilities</title>
                <meta name="description" content="Kryptone Facilities - SCP: Secret Laboratory Server" />
                <meta httpEquiv="Content-Security-Policy" content={`default-src 'self'; script-src 'self' 'nonce-${process.env.REACT_APP_NONCE}'; style-src 'self' 'nonce-${process.env.REACT_APP_NONCE}' https:; img-src 'self' data: https://cdn.discordapp.com; connect-src 'self'; font-src 'self' data: https:; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests;`} />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
                <meta httpEquiv="Referrer-Policy" content="no-referrer" />
            </Helmet>
            <Navbar />
            <AnimatePresence mode="wait">
                <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageWrapper noScroll><Home /></PageWrapper>} />
                        <Route path="/shop" element={<PageWrapper noScroll><Shop /></PageWrapper>} />
                        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
                        <Route path="/items-wiki" element={<PageWrapper><ItemsWiki /></PageWrapper>} />
                        <Route path="/our-staff" element={<PageWrapper><OurStaff /></PageWrapper>} />
                    </Routes>
                </Suspense>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
