import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

// Componente Navbar que muestra la barra de navegación superior
const Navbar = () => {
    const { user, isAuthenticated } = useAuth();

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        window.location.href = 'https://kryptonefacilities.netlify.app/';
    };

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        window.location.href = 'https://kryptonefacilities.netlify.app/';
    };

    return (
        <header className="bg-gray-900 text-white p-4 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center">
                {/* Logo de la barra de navegación */}
                <img src={logo} className="h-10" alt="Kryptone Facilities Logo" />
                <h1 className="ml-2 font-bold">Kryptone Facilities</h1>
            </div>
            <nav className="flex items-center space-x-4">
                {/* Enlaces de navegación */}
                <Link to="/" className="hover:text-gray-400">Inicio</Link>
                <Link to="/ranks" className="hover:text-gray-400">Rangos</Link>
                <Link to="/tos" className="hover:text-gray-400">Términos de Servicio</Link>
                <Link to="/privacy" className="hover:text-gray-400">Privacidad</Link>
                <Link to="/profile" className="hover:text-gray-400">Profile</Link>
                {isAuthenticated ? (
                    // Si el usuario está autenticado, mostramos su nombre, plan actual y el botón de cierre de sesión
                    <div className="flex items-center space-x-2">
                        <span>Bienvenido, {user?.name}</span>
                        {user?.memberships && user.memberships.length > 0 && (
                            <span>Plan Actual: {user.memberships[0].tier}</span>
                        )}
                        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Logout
                        </button>
                    </div>
                ) : (
                    // Si el usuario no está autenticado, mostramos el botón de inicio de sesión
                    <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login with Patreon
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
