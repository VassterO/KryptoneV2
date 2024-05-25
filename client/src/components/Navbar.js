import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        console.log("Navbar - Authenticated:", isAuthenticated);
        console.log("Navbar - User data:", user);
    }, [isAuthenticated, user]);

    const handleLogin = () => {
        window.location.href = 'https://kryptonev2.onrender.com/auth/patreon';
    };

    const handleLogout = () => {
        window.location.href = 'https://kryptonev2.onrender.com/auth/logout';
    };

    return (
        <header className="bg-gray-900 text-white p-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center">
                <img src={logo} className="h-10" alt="Kryptone Facilities Logo" />
                <h1 className="ml-2 font-bold">Kryptone Facilities</h1>
            </div>
            <nav className="flex items-center space-x-4">
                <Link to="/" className="hover:text-blue-400 transition duration-300">Inicio</Link>
                <Link to="/ranks" className="hover:text-blue-400 transition duration-300">Rangos</Link>
                <Link to="/tos" className="hover:text-blue-400 transition duration-300">Términos de Servicio</Link>
                <Link to="/privacy" className="hover:text-blue-400 transition duration-300">Privacidad</Link>
                <Link to="/profile" className="hover:text-blue-400 transition duration-300">Profile</Link>
                {isAuthenticated ? (
                    <div className="flex items-center space-x-2">
                        <span>Welcome, {user?.name}</span>
                        {user?.memberships && user.memberships.length > 0 && (
                            <span>Current Plan: {user.memberships[0].tier}</span>
                        )}
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition transform hover:scale-105 duration-300">
                            Logout
                        </button>
                    </div>
                ) : (
                    <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition transform hover:scale-105 duration-300">
                        Login with Patreon
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
