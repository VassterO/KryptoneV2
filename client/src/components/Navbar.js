import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Helmet } from 'react-helmet';

// Componente Navbar que muestra la barra de navegación superior
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Helmet>
                <title>Navbar | Kryptone Facilities</title>
                <meta name="description" content="Navega por las diferentes secciones de Kryptone Facilities, incluyendo Inicio, Rangos y Perfil." />
                <meta name="keywords" content="Kryptone Facilities, Navegación, Inicio, Rangos, Perfil" />
            </Helmet>
            <header className="bg-gradient-to-b from-gray-900 via-gray-900 to-transparent text-white p-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center">
                    {/* Logo de la barra de navegación */}
                    <img src={logo} className="h-10" alt="Kryptone Facilities Logo" />
                    <h1 className="ml-2 font-bold">Kryptone Facilities</h1>
                </div>
                <button
                    className="block lg:hidden p-2 rounded-md text-gray-500 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                    aria-controls="navbar-links"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
                <nav id="navbar-links" className={`lg:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    {/* Enlaces de navegación mejorados */}
                    <Link to="/" className="block py-2 lg:inline-block hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105 border-b-2 border-transparent hover:border-blue-500 rounded">
                        Inicio
                    </Link>
                    <Link to="/ranks" className="block py-2 lg:inline-block hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105 border-b-2 border-transparent hover:border-blue-500 rounded">
                        Rangos
                    </Link>
                    <Link to="/profile" className="block py-2 lg:inline-block hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105 border-b-2 border-transparent hover:border-blue-500 rounded">
                        Perfil
                    </Link>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
