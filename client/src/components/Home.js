import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';

const Home = () => {
    useEffect(() => {
        // Agregar la clase 'hide-scrollbar' cuando el componente se monta
        document.body.classList.add('hide-scrollbar');
        // Eliminar la clase 'hide-scrollbar' cuando el componente se desmonta
        return () => {
            document.body.classList.remove('hide-scrollbar');
        };
    }, []);

    return (
        <>
            {/* Configuración del encabezado del documento con react-helmet */}
            <Helmet>
                <title>Home | Kryptone Facilities</title>
                <meta
                    name="description"
                    content="Bienvenido a la página oficial de Kryptone Facilities"
                />
                <meta
                    name="keywords"
                    content="Kryptone Facilities, SCP Secret Laboratory, Servidor SCP, Comunidad SCP"
                />
                <meta name="author" content="Kryptone Facilities" />
            </Helmet>
            {/* Contenedor principal */}
            <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
                {/* Fondo animado de estrellas */}
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
                        Kryptone Facilities es un servidor de SCP: Secret Laboratory. Tenemos
                        contenido para descubrir y mucho más por venir, mantente atento.
                    </p>
                    <p className="text-xl">
                        Consulta los rangos en venta y qué beneficios obtienes al apoyar al
                        servidor.
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default Home;
