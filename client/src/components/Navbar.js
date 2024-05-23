import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust path as needed
import logo from '../assets/logo.png'; // Adjust the path if needed
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar = () => {
    const { isAuthenticated } = useAuth();

    return (
        <nav className="bg-gray-800 bg-opacity-75 p-4 shadow-md fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2"/>
                    <div className="text-white text-2xl font-bold">
                        Kryptone Facilities
                    </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white transition duration-300">Inicio</Link>
                    <Link to="/ranks" className="text-gray-300 hover:text-white transition duration-300">Rangos</Link>
                    <Link to="/tos" className="text-gray-300 hover:text-white transition duration-300">Términos de Servicio</Link>
                    <Link to="/privacy" className="text-gray-300 hover:text-white transition duration-300">Privacidad</Link>
                    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </div>
                <div className="md:hidden">
                    <button className="text-gray-300 focus:outline-none">
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
