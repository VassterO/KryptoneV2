import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';
import vanguardia from '../assets/vanguardia.webp';
import arcano from '../assets/arcano.png';
import investigador from '../assets/investigador.png';

const ranks = [
    {
        name: 'Vanguardia',
        image: vanguardia,
        description: 'Acceso anticipado y soporte prioritario para usuarios que eligen el rango Vanguardia.',
        price: 'Por determinar',
        benefits: ['Acceso anticipado', 'Soporte prioritario'],
    },
    {
        name: 'Arcano',
        image: arcano,
        description: 'Herramientas avanzadas y publicaciones exclusivas para usuarios que eligen el rango Arcano.',
        price: 'Por determinar',
        benefits: ['Herramientas avanzadas de investigación', 'Publicaciones exclusivas'],
    },
    {
        name: 'Investigador',
        image: investigador,
        description: 'Recursos exclusivos y participación en eventos especiales para usuarios que eligen el rango Investigador.',
        price: 'Por determinar',
        benefits: ['Acceso a recursos exclusivos', 'Participación en eventos especiales'],
    },
];

const Ranks = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        document.body.classList.add('hide-scrollbar');
        return () => {
            document.body.classList.remove('hide-scrollbar');
        };
    }, []);

    const handleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <title>Rangos | Kryptone Facilities</title>
                <meta
                    name="description"
                    content="Consulta los rangos disponibles en Kryptone Facilities, incluyendo Vanguardia, Arcano e Investigador, y sus beneficios exclusivos."
                />
                <meta
                    name="keywords"
                    content="Kryptone Facilities, rangos, Vanguardia, Arcano, Investigador, beneficios, SCP Secret Laboratory"
                />
            </Helmet>
            <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
                <StarBackground />
                <motion.div
                    className="relative z-10 w-full md:w-8/12 lg:w-6/12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-bold mb-8 text-center">Rangos Disponibles</h1>
                    {ranks.map((rank, index) => (
                        <motion.div
                            key={index}
                            className="mb-8 p-4 bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                onClick={() => handleExpand(index)}
                                className="w-full text-left focus:outline-none"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={rank.image}
                                        alt={rank.name}
                                        className="w-24 h-24 rounded-lg mr-4 transition duration-500 transform hover:scale-105 lazyload"
                                        loading="lazy"
                                    />
                                    <h2 className="text-2xl font-bold">{rank.name}</h2>
                                </div>
                            </button>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={expandedIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
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
                                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition transform hover:scale-105">
                                        Suscribirse
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Ranks;
