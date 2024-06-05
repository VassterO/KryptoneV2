import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';

const OurStaff = () => {
    useEffect(() => {
        document.body.classList.add('hide-scrollbar');
        return () => {
            document.body.classList.remove('hide-scrollbar');
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Our Staff | Kryptone Facilities</title>
                <meta name="description" content="Meet our dedicated team who work tirelessly to provide you the best experience." />
                <meta name="keywords" content="Kryptone Facilities, Our Staff, Team, SCP Secret Laboratory" />
                <meta name="author" content="Kryptone Facilities" />
            </Helmet>
            <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8 px-4 md:px-8 lg:px-12">
                <StarBackground />
                <motion.div
                    className="relative z-10 p-8 w-full md:w-8/12 lg:w-6/12 text-center flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                >
                    <h1 className="text-4xl font-bold mb-4">
                        Our Dedicated Team
                    </h1>
                    <p className="text-xl mb-4">
                        Meet our dedicated team who work tirelessly to provide you the best experience.
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default OurStaff;
