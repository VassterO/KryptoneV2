import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Ranks from './components/Ranks';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ItemsWiki from './components/ItemsWiki'; // New component
import OurStaff from './components/OurStaff'; // New component
import './index.css';
import './custom-scrollbar.css';

// Component to wrap each page with transition animations
const PageWrapper = ({ children, noScroll }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={`flex-grow w-full ${noScroll ? 'overflow-hidden' : 'overflow-auto'}`}
    >
        {children}
    </motion.div>
);

// Main application component managing routes and navigation
const App = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top of the page on route change
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Helmet>
                <title>Kryptone Facilities</title>
                <meta name="description" content="Kryptone Facilities - SCP: Secret Laboratory Server" />
            </Helmet>
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageWrapper noScroll><Home /></PageWrapper>} />
                    <Route path="/ranks" element={<PageWrapper noScroll><Ranks /></PageWrapper>} />
                    <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
                    <Route path="/items-wiki" element={<PageWrapper><ItemsWiki /></PageWrapper>} />
                    <Route path="/our-staff" element={<PageWrapper><OurStaff /></PageWrapper>} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

// Wrap the application with the router
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
