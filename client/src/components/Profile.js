import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import StarBackground from '../components/StarBackground'; // Adjust the path as needed

const Profile = () => {
    const [profile, setProfile] = useState({
        name: "John Doe",
        memberships: [{ tier: "Premium" }]
    });
    const isAuthenticated = true; // Mock authentication status

    useEffect(() => {
        console.log("Profile - Authenticated:", isAuthenticated);
        console.log("Profile - User data:", profile);

        if (isAuthenticated) {
            setProfile(profile);
        } else {
            setProfile(null);
        }
    }, [profile, isAuthenticated]);

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute w-full h-full bg-gray-900"></div>
                <StarBackground />
                <div className="flex flex-col items-center space-y-2 relative z-20">
                    <div className="animate-spin-slow rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                    <span>Loading...</span>
                </div>
            </div>
        );
    }

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
                <h2 className="text-2xl font-bold">Welcome, {profile.name}</h2>
                {profile.memberships && profile.memberships.length > 0 && (
                    <p className="text-xl">Current Plan: {profile.memberships[0].tier}</p>
                )}
            </div>
        </motion.div>
    );
};

export default Profile;
