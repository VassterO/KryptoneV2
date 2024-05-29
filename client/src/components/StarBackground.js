import React, { useEffect, useState } from 'react';

// Función para generar una estrella con animación
const generateStar = (index) => {
    const speed = 4 + Math.random() * 2; // Velocidad entre 4s y 6s
    const sizeFactor = window.innerWidth >= 2560 ? 1 : window.innerWidth / 2560;
    const size = (Math.random() * 2 + 3) * sizeFactor; // Tamaño ajustado proporcionalmente
    const delay = Math.random() * 2; // Retardo inicial hasta 2s

    return (
        <div
            key={index}
            className="star"
            style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${speed}s`,
                animationDelay: `${delay}s`,
                opacity: 0,
                animationFillMode: 'forwards',
                animationPlayState: window.backgroundAnim ? 'running' : 'paused'
            }}
        ></div>
    );
};

// Este componente muestra un fondo animado con estrellas
const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const numStars = Math.floor((window.innerWidth * window.innerHeight) / (2560 * 1440) * 50); // Ajustar cantidad basado en la resolución
        // Genera las estrellas iniciales
        const initialStars = Array.from({ length: numStars }, (_, index) => generateStar(index));
        setStars(initialStars);

        // Añade nuevas estrellas periódicamente hasta un máximo ajustado
        const interval = setInterval(() => {
            setStars((prevStars) => {
                if (prevStars.length < numStars * 2) {
                    return [...prevStars, generateStar(prevStars.length)];
                }
                clearInterval(interval);
                return prevStars;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    // Observa los cambios en la variable global
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const stars = document.querySelectorAll('.star');
            stars.forEach((star) => {
                star.style.animationPlayState = window.backgroundAnim ? 'running' : 'paused';
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-background-anim']
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
            {stars}
        </div>
    );
};

export default StarBackground;
