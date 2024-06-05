import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = (e, path) => {
        if (location.pathname === path) {
            e.preventDefault();
        } else {
            setIsOpen(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Navbar | Kryptone Facilities</title>
                <meta name="description" content="Navega por las diferentes secciones de Kryptone Facilities, incluyendo Inicio, Rangos y Perfil." />
                <meta name="keywords" content="Kryptone Facilities, Navegación, Inicio, Rangos, Perfil" />
            </Helmet>
            <header className="bg-gradient-to-b from-gray-900 via-gray-900 to-transparent text-white p-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center">
                    <img src={logo} className="h-10" alt="Kryptone Facilities Logo" />
                    <h1 className="ml-2 font-bold">Kryptone Facilities</h1>
                </div>
                <button
                    className="block lg:hidden p-2 rounded-md text-gray-500 hover:text-white focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-controls="navbar-links"
                    style={{ userSelect: 'none' }}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
                <nav id="navbar-links" className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <NavLink
                        to="/"
                        className="block py-2 lg:inline-block hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105 border-b-2 border-transparent hover:border-blue-500 rounded"
                        onClick={(e) => closeMenu(e, '/')}
                        style={{ userSelect: 'none' }}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/ranks"
                        className="block py-2 lg:inline-block hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105 border-b-2 border-transparent hover:border-blue-500 rounded"
                        onClick={(e) => closeMenu(e, '/ranks')}
                        style={{ userSelect: 'none' }}
                    >
                        Rangos
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className="block py-2 lg:inline-block hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-105 border-b-2 border-transparent hover:border-blue-500 rounded"
                        onClick={(e) => closeMenu(e, '/profile')}
                        style={{ userSelect: 'none' }}
                    >
                        Perfil
                    </NavLink>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
