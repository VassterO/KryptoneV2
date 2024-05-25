import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path as needed
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsScrolled(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleLogin = () => {
        window.location.href = 'https://kryptonev2.onrender.com/auth/patreon';
    };

    const handleLogout = () => {
        window.location.href = 'https://kryptonev2.onrender.com/auth/logout';
    };

    return (
        <header className={`bg-gray-900 text-white p-4 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
            <div className="flex items-center">
                <img src={logo} className="h-10" alt="Kryptone Facilities Logo" />
                <h1 className="ml-2 font-bold">Kryptone Facilities</h1>
            </div>
            <nav className="flex items-center space-x-4">
                <Link to="/" className="hover:text-gray-400">Inicio</Link>
                <Link to="/ranks" className="hover:text-gray-400">Rangos</Link>
                <Link to="/tos" className="hover:text-gray-400">Términos de Servicio</Link>
                <Link to="/privacy" className="hover:text-gray-400">Privacidad</Link>
                <Link to="/profile" className="hover:text-gray-400">Profile</Link> {/* Ensure Profile link is always visible */}
                {isAuthenticated ? (
                    <div className="flex items-center space-x-2">
                        <span>Welcome, {user.name}</span>
                        {user.memberships && user.memberships.length > 0 && (
                            <span>Current Plan: {user.memberships[0].tier}</span>
                        )}
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Logout
                        </button>
                    </div>
                ) : (
                    <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login with Patreon
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
