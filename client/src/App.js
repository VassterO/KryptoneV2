import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import './index.css';
import './custom-scrollbar.css';

const Home = lazy(() => import('./components/Home'));
const Ranks = lazy(() => import('./components/Ranks'));
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
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Helmet>
                <title>Kryptone Facilities</title>
                <meta name="description" content="Kryptone Facilities - SCP: Secret Laboratory Server" />
            </Helmet>
            <Navbar />
            <AnimatePresence>
                <Suspense fallback={<div className="text-white">Loading...</div>}>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageWrapper noScroll><Home /></PageWrapper>} />
                        <Route path="/ranks" element={<PageWrapper noScroll><Ranks /></PageWrapper>} />
                        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
                        <Route path="/items-wiki" element={<PageWrapper><ItemsWiki /></PageWrapper>} />
                        <Route path="/our-staff" element={<PageWrapper><OurStaff /></PageWrapper>} />
                    </Routes>
                </Suspense>
            </AnimatePresence>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
