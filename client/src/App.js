import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './components/Home';
import Ranks from './components/Ranks';
import TOS from './components/TOS';
import Privacy from './components/Privacy';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './index.css';
import './custom-scrollbar.css';

// Este componente envuelve cada página con una animación de transición
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

// Componente principal de la aplicación que maneja las rutas y la navegación
const App = () => {
    const location = useLocation();

    useEffect(() => {
        // Cada vez que cambias de ruta, te lleva al inicio de la página
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            {/* Barra de navegación */}
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageWrapper noScroll><Home /></PageWrapper>} />
                    <Route path="/ranks" element={<PageWrapper noScroll><Ranks /></PageWrapper>} />
                    <Route path="/tos" element={<PageWrapper><TOS /></PageWrapper>} />
                    <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
                    <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

// Envolvemos la aplicación con el enrutador
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
