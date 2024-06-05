import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold mb-2">Kryptone Facilities</h4>
                        <p>Connecting gamers, building communities.</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold mb-2">Quick Links</h4>
                        <ul className="list-none space-y-2">
                            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                            <li><Link to="/ranks" className="hover:text-blue-500">Ranks</Link></li>
                            <li><Link to="/profile" className="hover:text-blue-500">Profile</Link></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-bold mb-2">Resources</h4>
                        <ul className="list-none space-y-2">
                            <li><Link to="/items-wiki" className="hover:text-blue-500">Items Wiki</Link></li>
                            <li><Link to="/our-staff" className="hover:text-blue-500">Our Staff</Link></li>
                            <li><Link to="/faq" className="hover:text-blue-500">FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-4">&copy; 2024 Kryptone Facilities. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
