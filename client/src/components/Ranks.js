import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import vanguardiaImg from '../assets/vanguardia.png';
import arcanoImg from '../assets/arcano.png';
import investigadorImg from '../assets/investigador.png';

const ranks = [
    {
        name: 'Vanguardia',
        image: vanguardiaImg,
        description: 'Placeholder',
        price: 'Por determinar',
        benefits: ['Acceso anticipado', 'Soporte prioritario'],
    },
    {
        name: 'Arcano',
        image: arcanoImg,
        description: 'Placeholder',
        price: 'Por determinar',
        benefits: ['Herramientas avanzadas de investigación', 'Publicaciones exclusivas'],
    },
    {
        name: 'Investigador',
        image: investigadorImg,
        description: 'Placeholder',
        price: 'Por determinar',
        benefits: ['Acceso a recursos exclusivos', 'Participación en eventos especiales'],
    },
];

const Ranks = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
            <div className="w-10/12 md:w-8/12 lg:w-6/12">
                <h2 className="text-4xl font-bold text-center mb-8">Rangos</h2>
                {ranks.map((rank, index) => (
                    <div
                        key={index}
                        className="mb-8 p-4 bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl transition duration-500"
                    >
                        <button
                            onClick={() => handleExpand(index)}
                            className="w-full text-left focus:outline-none"
                        >
                            <div className="flex items-center">
                                <LazyLoad height={100} offset={100} once>
                                    <img
                                        src={rank.image}
                                        alt={rank.name}
                                        className="w-24 h-24 rounded-lg mr-4 transition duration-500 transform hover:scale-105"
                                    />
                                </LazyLoad>
                                <h3 className="text-2xl font-bold">{rank.name}</h3>
                            </div>
                        </button>
                        <div
                            className={`overflow-hidden transition-all ease-in-out duration-500 ${
                                expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                            style={{ transitionProperty: 'max-height, opacity' }}
                        >
                            <div className="mt-4 p-2">
                                <p className="text-lg mb-2">{rank.description}</p>
                                <p className="text-lg mb-4">Precio: {rank.price}</p>
                                <ul className="list-none text-lg mb-4 space-y-2">
                                    {rank.benefits.map((benefit, idx) => (
                                        <li key={idx} className="pl-4 border-l-2 border-blue-500">
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                    Suscribirse
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ranks;
