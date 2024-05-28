import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import StarBackground from './StarBackground';
import { Helmet } from 'react-helmet';

// Este componente representa la página principal de nuestra aplicación
const Home = () => {
    useEffect(() => {
        // Vamos a ocultar la barra de desplazamiento cuando se cargue este componente
        document.body.classList.add('hide-scrollbar');
        return () => {
            // Y la volvemos a mostrar cuando el componente se desmonte
            document.body.classList.remove('hide-scrollbar');
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
            <Helmet>
                <title>Home | Kryptone Facilities</title>
                <meta name="description" content="Bienvenido a la pagina oficial de Kryptone Facilities" />
            </Helmet>
            {/* Fondo animado con estrellas */}
            <StarBackground />
            <motion.div
                className="relative z-10 p-8 w-full md:w-8/12 lg:w-6/12 text-center flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl font-bold mb-4">
                    Bienvenido a la pagina oficial de Kryptone Facilities
                </h1>
                <p className="text-xl mb-4">
                    Kryptone Facilities es un servidor de SCP: Secret Laboratory. Tenemos contenido para descubrir y mucho mas por venir, mantente atento.
                </p>
                <p className="text-xl">
                    Consulta los rangos en venta y que beneficios obtienes al apoyar al servidor
                </p>
            </motion.div>
        </div>
    );
};

export default Home;
