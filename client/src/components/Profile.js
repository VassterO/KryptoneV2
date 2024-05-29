import React, { useEffect } from 'react';
import StarBackground from '../components/StarBackground'; // Ajusta la ruta según sea necesario

const Profile = () => {
    const isAuthenticated = true; // Estado de autenticación simulado

    useEffect(() => {
        console.log("Profile - Autenticado:", isAuthenticated);

        if (isAuthenticated) {
            // Aquí simulamos la carga de datos del usuario
            setTimeout(() => {
                // Mantengo el perfil en null para que el estado de carga sea infinito
            }, 1000);
        }
    }, [isAuthenticated]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute w-full h-full bg-gray-900"></div>
            {/* Aquí añado el fondo animado con estrellas */}
            <StarBackground />
            <div className="flex flex-col items-center space-y-2 relative z-20">
                {/* Este es el spinner de carga */}
                <div className="animate-spin-slow rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        </div>
    );
};

export default Profile;
