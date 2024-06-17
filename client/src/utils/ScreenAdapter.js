import { useEffect, useState } from 'react';

const useScreenAdapter = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            setWindowDimensions({ width, height });

            let marginTop;
            if (width >= 2560) {
                marginTop = -10;
            } else if (width >= 1440) {
                marginTop = -8;
            } else if (width >= 1024) {
                marginTop = -6;
            } else {
                marginTop = -4;
            }
            document.documentElement.style.setProperty('--margin-top-adjustment', `${marginTop}vh`);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useScreenAdapter;
