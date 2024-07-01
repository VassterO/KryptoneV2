import React, { useEffect, useState } from 'react';
import '../styles/StarBackground.css';

// Function to detect device type
const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(ua) && !/mobi|android/i.test(ua)) {
        return 'tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|WPDesktop|Fennec|Windows Phone/i.test(ua)) {
        return 'mobile';
    }
    return 'desktop';
};

// Function to generate a star with random properties
const generateStar = (index, sizeFactor) => {
    const speed = 4 + Math.random() * 2;
    const size = (Math.random() * 2 + 3) * sizeFactor;
    const delay = Math.random() * 2;

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
            }}
        ></div>
    );
};

const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const deviceType = getDeviceType();
        let sizeFactor = 1;
        if (deviceType === 'mobile') sizeFactor = 0.5;
        if (deviceType === 'tablet') sizeFactor = 0.75;

        const numStars = Math.floor(
            (window.innerWidth * window.innerHeight) / (2560 * 1440) * 50
        );

        const initialStars = Array.from(
            { length: numStars },
            (_, index) => generateStar(index, sizeFactor)
        );
        setStars(initialStars);

        const interval = setInterval(() => {
            setStars((prevStars) => {
                if (prevStars.length < numStars * 2) {
                    return [...prevStars, generateStar(prevStars.length, sizeFactor)];
                }
                clearInterval(interval);
                return prevStars;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">{stars}</div>;
};

export default StarBackground;
