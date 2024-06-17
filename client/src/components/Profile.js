import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import StarBackground from './StarBackground';
import '../styles/Profile.css';

const Profile = () => {
    useEffect(() => {
        const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

        if (!isMobileDevice) {
            document.body.classList.add('hide-scrollbar');
        }

        return () => {
            if (!isMobileDevice) {
                document.body.classList.remove('hide-scrollbar');
            }
        };
    }, []);

    return (
        <motion.div
            className="profile-container relative z-20 flex items-center justify-center h-full min-h-screen bg-gray-900 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Helmet>
                <title>Perfil | Kryptone Facilities</title>
                <meta name="description" content="Consulta tu perfil en Kryptone Facilities." />
                <meta name="keywords" content="Kryptone Facilities, perfil, SCP Secret Laboratory" />
            </Helmet>
            <div className="absolute w-full h-full bg-gray-900"></div>
            <StarBackground />
            <div className="relative z-20">
                <div className="animate-spin-slow rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        </motion.div>
    );
};

export default Profile;
