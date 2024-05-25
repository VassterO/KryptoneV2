import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Ranks from './components/Ranks';
import TOS from './components/TOS';
import Privacy from './components/Privacy';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import './index.css'; // Ensure Tailwind CSS and custom styles are included
import './custom-scrollbar.css'; // Import the custom scrollbar CSS

const App = () => {
    const location = useLocation();

    // Determine if the current path is Home or Ranks
    const isNoScrollPage = location.pathname === '/' || location.pathname === '/ranks';

    // Apply the no-scroll class to the body element conditionally
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
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
