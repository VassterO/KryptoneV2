import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';
import vanguardia from '../assets/vanguardia.webp';
import arcano from '../assets/arcano.webp';
import investigador from '../assets/investigador.webp';
import Footer from './Footer';
import SecureRedirect from '../security/SecureRedirect';
import '../styles/Ranks.css';

// List of available ranks with details
const ranks = [
    {
        name: 'Vanguardia',
        image: vanguardia,
        description: 'El rango Vanguardia incluye acceso a funciones básicas de donadores.',
        price: '3.25€ / mes',
        benefits: [
            '5 Eventos semanales',
            'Chat de donadores',
            'Auras del color de tu rango',
            'Emotes',
        ],
        patreonLink: '', // Add actual link if available
    },
    {
        name: 'Arcano',
        image: arcano,
        description: 'El rango Arcano incluye todas las ventajas de Vanguardia, además de gorros',
        price: '4.33€ / mes',
        benefits: [
            '8 Eventos semanales',
            'Chat de donadores',
            'Auras del color de tu rango',
            'Emotes',
            'Gorros',
        ],
        patreonLink: '', // Add actual link if available
    },
    {
        name: 'Investigador',
        image: investigador,
        description: 'El rango Investigador brinda acceso a todas las ventajas de los rangos anteriores, además de mascotas.',
        price: '6.50€ / mes',
        benefits: [
            '12 Eventos semanales',
            'Chat de donadores',
            'Auras del color de tu rango',
            'Emotes',
            'Gorros',
            'Mascotas',
        ],
        patreonLink: '', // Add actual link if available
    },
];

const Shop = () => {
    const [expandedIndex, setExpandedIndex] = useState(null); // State to manage expanded rank details

    // Function to handle expanding/collapsing rank details
    const handleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <title>Rangos | Kryptone Facilities</title>
                <meta name="description" content="Consulta los rangos disponibles en Kryptone Facilities, incluyendo Vanguardia, Arcano e Investigador, y sus beneficios exclusivos." />
                <meta name="keywords" content="Kryptone Facilities, rangos, Vanguardia, Arcano, Investigador, beneficios, SCP Secret Laboratory" />
            </Helmet>
            <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
                <StarBackground />
                <motion.div
                    className="relative z-10 w-full md:w-8/12 lg:w-6/12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-center">Rangos Disponibles</h1>
                    {ranks.map((rank, index) => (
                        <motion.div
                            key={index}
                            className="rank-card"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                        >
                            <button
                                onClick={() => handleExpand(index)}
                                className="focus:outline-none"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={rank.image}
                                        alt={rank.name}
                                        className="transition duration-500 transform hover:scale-105"
                                        loading="lazy"
                                    />
                                    <h2>{rank.name}</h2>
                                </div>
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={expandedIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="mt-4 p-2">
                                    <p className="text-lg mb-2">{rank.description}</p>
                                    <p className="text-lg mb-4">Precio: {rank.price}</p>
                                    <ul className="list-none text-lg mb-4 space-y-2 pl-4 border-l-2 border-blue-500 text-left">
                                        {rank.benefits.map((benefit, idx) => (
                                            <li key={idx}>{benefit}</li>
                                        ))}
                                    </ul>
                                    <SecureRedirect url={rank.patreonLink}>
                                        <button className="action-btn">
                                            Suscribirse
                                        </button>
                                    </SecureRedirect>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="mt-8 text-lg">
                    <p>Pago mensual a través de <a href="https://patreon.com/kryptonefacilities" className="text-blue-500 hover:underline">Patreon</a></p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Shop;
