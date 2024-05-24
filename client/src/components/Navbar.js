import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path if needed

const Navbar = () => {
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
                </div>
                <div className="md:flex items-center space-x-4">
                    <Link to="/login" className="text-gray-300 hover:text-white transition duration-300">Login with Patreon</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
