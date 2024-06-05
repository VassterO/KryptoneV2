import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4 px-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Kryptone Facilities. Todos los derechos reservados.</p>
                <nav className="flex justify-center space-x-4 mt-2">
                    <a href="/terms" className="hover:text-blue-500 transition duration-300">Términos y condiciones</a>
                    <a href="/privacy" className="hover:text-blue-500 transition duration-300">Política de privacidad</a>
                    <a href="/contact" className="hover:text-blue-500 transition duration-300">Contacto</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
