import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Ranks from './components/Ranks';
import TOS from './components/TOS';
import Privacy from './components/Privacy';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import './custom-scrollbar.css';

const App = () => {
    const location = useLocation();

    const isNoScrollPage = location.pathname === '/' || location.pathname === '/ranks';

    React.useEffect(() => {
        if (isNoScrollPage) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isNoScrollPage]);

    return (
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ranks" element={<Ranks />} />
                <Route path="/tos" element={<TOS />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
};

const AppWrapper = () => (
    <AuthProvider>
        <Router>
            <App />
        </Router>
    </AuthProvider>
);

export default AppWrapper;
