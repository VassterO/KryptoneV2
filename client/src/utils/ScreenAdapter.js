import { useEffect, useState } from 'react';

/**
 * Custom hook to adapt the screen dimensions and apply margin adjustments
 * based on the screen width.
 */
const useScreenAdapter = () => {
    // State to store the window dimensions
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Effect to handle window resize events
    useEffect(() => {
        // Function to update window dimensions and set margin adjustments
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            setWindowDimensions({ width, height });

            // Adjust margin based on screen width
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

            // Set CSS variable for margin-top adjustment
            document.documentElement.style.setProperty('--margin-top-adjustment', `${marginTop}vh`);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial call to set dimensions and margin
        handleResize();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export default useScreenAdapter;
