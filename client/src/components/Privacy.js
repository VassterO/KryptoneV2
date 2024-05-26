import React from 'react';
import { motion } from 'framer-motion';
import StarBackground from './StarBackground'; // Importar el componente StarBackground

// Este componente muestra la política de privacidad
const Privacy = () => (
    <motion.div
        className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <StarBackground /> {/* Añadir el componente StarBackground */}
        <div className="relative z-10 p-8 bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl w-10/12 md:w-8/12 lg:w-6/12">
            <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
            <p className="text-xl mb-4">Última actualización: 25 de mayo de 2024</p>
            <h2 className="text-2xl font-bold mb-2">TODO</h2>
            <p className="text-lg mb-4">TODO</p>
        </div>
    </motion.div>
);

export default Privacy;
