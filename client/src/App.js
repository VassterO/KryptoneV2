import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Profile from './components/Profile';
import ItemsWiki from './components/ItemsWiki';
import OurStaff from './components/OurStaff';
import './index.css';
import './custom-scrollbar.css';

// Get the nonce from the meta tag for Content Security Policy (CSP)
const nonce = document.querySelector('meta[name="csp-nonce"]').getAttribute('content');

// Create a cache for emotion styling with the nonce
const cache = createCache({
    key: 'custom',
    nonce: nonce,
    prepend: true,
});

// A wrapper for page components with animation effects and optional scroll
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

// Main App component
const App = () => {
    const location = useLocation();

    return (
        <CacheProvider value={cache}>
            <div className="bg-gray-900 min-h-screen flex flex-col justify-between">
                <Helmet>
                    <title>Kryptone Facilities</title>
                    <meta name="description" content="Kryptone Facilities - SCP: Secret Laboratory Server" />
                </Helmet>
                <Navbar />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<PageWrapper noScroll><Home /></PageWrapper>} />
                        <Route path="/shop" element={<PageWrapper noScroll><Shop /></PageWrapper>} />
                        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
                        <Route path="/items-wiki" element={<PageWrapper><ItemsWiki /></PageWrapper>} />
                        <Route path="/our-staff" element={<PageWrapper><OurStaff /></PageWrapper>} />
                    </Routes>
                </AnimatePresence>
                <Footer />
            </div>
        </CacheProvider>
    );
};

// Wrapper component to provide routing
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
