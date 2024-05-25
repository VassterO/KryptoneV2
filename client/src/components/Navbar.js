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
        <header className="bg-background text-foreground p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
            <div className="flex items-center">
                <img src={logo} className="h-10" alt="Kryptone Facilities Logo" />
                <h1 className="ml-2 font-bold text-xl">Kryptone Facilities</h1>
            </div>
            <nav className="flex items-center space-x-4">
                <Link to="/" className="hover:text-accent transition-colors duration-200">Inicio</Link>
                <Link to="/ranks" className="hover:text-accent transition-colors duration-200">Rangos</Link>
                <Link to="/tos" className="hover:text-accent transition-colors duration-200">Términos de Servicio</Link>
                <Link to="/privacy" className="hover:text-accent transition-colors duration-200">Privacidad</Link>
                <Link to="/profile" className="hover:text-accent transition-colors duration-200">Profile</Link>
                {isAuthenticated ? (
                    <div className="flex items-center space-x-2">
                        <span>Welcome, {user?.name}</span>
                        {user?.memberships && user.memberships.length > 0 && (
                            <span>Current Plan: {user.memberships[0].tier}</span>
                        )}
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                            Logout
                        </button>
                    </div>
                ) : (
                    <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                        Login with Patreon
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
