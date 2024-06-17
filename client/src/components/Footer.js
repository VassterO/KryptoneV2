import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="w-full py-4 text-white text-center">
            <Link to="/profile" className="cursor-pointer hover:underline mx-2">Perfil</Link>
            <Link to="/our-staff" className="cursor-pointer hover:underline mx-2">Equipo Directivo</Link>
            <Link to="/items-wiki" className="cursor-pointer hover:underline mx-2">Wiki de Objetos</Link>
        </footer>
    );
};

export default Footer;
