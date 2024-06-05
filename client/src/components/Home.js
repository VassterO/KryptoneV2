import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';
import Footer from './Footer';

const Home = () => {
    useEffect(() => {
        // Add 'hide-scrollbar' class when component mounts
        document.body.classList.add('hide-scrollbar');
        // Remove 'hide-scrollbar' class when component unmounts
        return () => {
            document.body.classList.remove('hide-scrollbar');
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Home | Kryptone Facilities</title>
                <meta name="description" content="Bienvenido a la página oficial de Kryptone Facilities" />
                <meta name="keywords" content="Kryptone Facilities, SCP Secret Laboratory, Servidor SCP, Comunidad SCP" />
                <meta name="author" content="Kryptone Facilities" />
            </Helmet>
            <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
                <StarBackground />
                <motion.div
                    className="relative z-10 p-8 w-full md:w-8/12 lg:w-6/12 text-center flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-bold mb-4">
                        Bienvenido a la página oficial de Kryptone Facilities
                    </h1>
                    <p className="text-xl mb-4">
                        Kryptone Facilities es un servidor de SCP: Secret Laboratory. Tenemos contenido para descubrir y mucho más por venir, mantente atento.
                    </p>
                    <p className="text-xl">
                        Consulta los rangos en venta y qué beneficios obtienes al apoyar al servidor.
                    </p>
                </motion.div>
            </div>
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Items Wiki</h2>
                <p className="text-lg mb-4 text-center">
                    Explore our comprehensive wiki to learn about various items available in the game.
                </p>
                {/* Add content for Items Wiki here */}
            </div>
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold mb-4 text-center">Our Staff</h2>
                <p className="text-lg mb-4 text-center">
                    Meet our dedicated team who work tirelessly to provide you the best experience.
                </p>
                {/* Add content for Our Staff here */}
            </div>
            <Footer />
        </>
    );
};

export default Home;
