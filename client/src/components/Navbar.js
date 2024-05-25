import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <header className="bg-gray-900 text-white p-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center">
                <img src={logo} className="h-10" alt="Kryptone Facilities Logo" />
                <h1 className="ml-2 font-bold">Kryptone Facilities</h1>
            </div>
            <nav className="flex items-center space-x-4">
                <Link to="/" className="hover:text-gray-400">Inicio</Link>
                <Link to="/ranks" className="hover:text-gray-400">Rangos</Link>
                <Link to="/tos" className="hover:text-gray-400">Términos de Servicio</Link>
                <Link to="/privacy" className="hover:text-gray-400">Privacidad</Link>
                <LoginButton />
                <LogoutButton />
            </nav>
        </header>
    );
};

export default Navbar;
