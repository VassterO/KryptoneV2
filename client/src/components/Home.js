import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
            <div className="p-8 bg-gray-800 bg-opacity-75 shadow-2xl rounded-lg w-10/12 md:w-8/12 lg:w-6/12 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Bienvenido a la pagina oficial de Kryptone Facilities
                </h1>
                <p className="text-xl mb-4">
                    Kryptone Facilities es un servidor de SCP: Secret Laboratory. Tenemos contenido para descubrir y mucho más por venir, mantente atento.
                </p>
                <p className="text-xl">
                    Consulta los rangos en venta y que beneficios obtienes al apoyar al servidor.
                </p>
            </div>
        </div>
    );
};

export default Home;
