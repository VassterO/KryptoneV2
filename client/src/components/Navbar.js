import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the open/close state of the mobile menu
    const location = useLocation(); // Hook to get the current location

    // Function to toggle the mobile menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Function to close the menu and prevent default action if already on the target path
    const closeMenu = (e, path) => {
        if (location.pathname === path) e.preventDefault();
        else setIsOpen(false);
    };

    return (
        <>
            <Helmet>
                <title>Navbar | Kryptone Facilities</title>
                <meta name="description" content="Navega por las diferentes secciones de Kryptone Facilities, incluyendo Inicio, Rangos y Perfil." />
                <meta name="keywords" content="Kryptone Facilities, Navegación, Inicio, Rangos, Perfil" />
            </Helmet>
            <header className="navbar-header">
                <div className="flex items-center">
                    <img src={logo} className="h-10" alt="Kryptone Facilities Logo" />
                    <h1 className="ml-2 font-bold text-white">Kryptone Facilities</h1>
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
                <nav id="navbar-links" className={`navbar-links ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <NavLink
                        to="/"
                        className="navbar-link"
                        onClick={(e) => closeMenu(e, '/')}
                        style={{ userSelect: 'none' }}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className="navbar-link"
                        onClick={(e) => closeMenu(e, '/shop')}
                        style={{ userSelect: 'none' }}
                    >
                        Tienda
                    </NavLink>
                </nav>
            </header>
            {isOpen && (
                <div className="mobile-menu">
                    <nav>
                        <NavLink
                            to="/"
                            className="mobile-link"
                            onClick={(e) => closeMenu(e, '/')}
                            style={{ userSelect: 'none' }}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/shop"
                            className="mobile-link"
                            onClick={(e) => closeMenu(e, '/shop')}
                            style={{ userSelect: 'none' }}
                        >
                            Tienda
                        </NavLink>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
