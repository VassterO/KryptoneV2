import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';
import vanguardia from '../assets/vanguardia.png';
import arcano from '../assets/arcano.png';
import investigador from '../assets/investigador.png';

// Aquí definimos los datos de los diferentes rangos que ofrecemos
const ranks = [
    {
        name: 'Vanguardia',
        image: vanguardia,
        description: 'Placeholder',
        price: 'Por determinar',
        benefits: ['Acceso anticipado', 'Soporte prioritario'],
    },
    {
        name: 'Arcano',
        image: arcano,
        description: 'Placeholder',
        price: 'Por determinar',
        benefits: ['Herramientas avanzadas de investigación', 'Publicaciones exclusivas'],
    },
    {
        name: 'Investigador',
        image: investigador,
        description: 'Placeholder',
        price: 'Por determinar',
        benefits: ['Acceso a recursos exclusivos', 'Participación en eventos especiales'],
    },
];

// Este componente muestra los rangos disponibles y sus detalles
const Ranks = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Esta función se encarga de expandir o contraer la información de un rango
    const handleExpand = (index) => setExpandedIndex(expandedIndex === index ? null : index);

    useEffect(() => {
        // Ocultamos la barra de desplazamiento cuando se monta el componente
        document.body.classList.add('hide-scrollbar');
        return () => document.body.classList.remove('hide-scrollbar');
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
            <Helmet>
                <title>Rangos | Kryptone Facilities</title>
                <meta name="description" content="Consulta los rangos disponibles en Kryptone Facilities" />
            </Helmet>
            {/* Fondo animado con estrellas */}
            <StarBackground />
            <motion.div
                className="relative z-10 w-10/12 md:w-8/12 lg:w-6/12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold mb-8 text-center">Rangos</h2>
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
                                    loading="lazy" // Lazy loading attribute
                                />
                                <h3 className="text-2xl font-bold">{rank.name}</h3>
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
    );
};

export default Ranks;
