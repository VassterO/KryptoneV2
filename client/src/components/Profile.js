import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import StarBackground from '../components/StarBackground'; // Adjust the path as needed

const Profile = () => {
    useEffect(() => {
        const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

        if (deviceType === 'desktop') {
            document.body.classList.add('hide-scrollbar');
        }

        return () => {
            if (deviceType === 'desktop') {
                document.body.classList.remove('hide-scrollbar');
            }
        };
    }, []);

    return (
        <motion.div
            className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 relative overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="absolute w-full h-full bg-gray-900"></div>
            <StarBackground />
            <div className="relative z-20">
                <div className="animate-spin-slow rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
        </motion.div>
    );
};

export default Profile;
