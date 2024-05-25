import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
            <div className="p-8 bg-transparent shadow-2xl rounded-lg w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="fade-in">
                <h1 className="text-4xl font-bold mb-4">
                    Bienvenido a la pagina oficial de Kryptone Facilities
                </h1>
                <p className="text-xl mb-4">
                    Kryptone Facilities es un servidor de SCP: Secret Laboratory. Tenemos contenido para descubrir y mucho mas por venir, mantente atento.
                </p>
                <p className="text-xl">
                    Consulta los rangos en venta y que beneficios obtienes al apoyar al servidor
                </p>
            </div>
        </div>
    );
};

export default Home;
