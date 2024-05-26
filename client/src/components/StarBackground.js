import React, { useEffect, useState } from 'react';

// Función para generar una estrella con animación
const generateStar = (index) => {
    const speed = 4 + Math.random() * 2; // Velocidad entre 4s y 6s
    const isFast = speed < 5;
    return (
        <div
            key={index}
            className={`absolute star ${isFast ? 'fast' : 'slow'} animate-shootingStar`}
            style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                animationDuration: `${speed}s`,
                animationDelay: `${Math.random()}s`,
                opacity: 0,
                animationFillMode: 'forwards',
            }}
        ></div>
    );
};

// Este componente muestra un fondo animado con estrellas
const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Genera las estrellas iniciales
        const initialStars = Array.from({ length: 10 }, (_, index) => generateStar(index));
        setStars(initialStars);

        // Añade nuevas estrellas periódicamente hasta un máximo de 30
        const interval = setInterval(() => {
            setStars((prevStars) => {
                if (prevStars.length < 30) {
                    return [...prevStars, generateStar(prevStars.length)];
                }
                clearInterval(interval);
                return prevStars;
            });
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
            {stars}
        </div>
    );
};

export default StarBackground;
