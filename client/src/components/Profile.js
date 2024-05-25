import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user, isAuthenticated } = useAuth();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        console.log("Profile - Authenticated:", isAuthenticated);
        console.log("Profile - User data:", user);

        if (isAuthenticated) {
            setProfile(user);
        } else {
            setProfile(null);
        }
    }, [user, isAuthenticated]);

    if (!profile) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin-slow rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="p-4" data-aos="fade-in">
            <h2 className="text-white text-2xl">Welcome, {profile.name}</h2>
            {profile.memberships && profile.memberships.length > 0 && (
                <p className="text-white">Current Plan: {profile.memberships[0].tier}</p>
            )}
        </div>
    );
};

export default Profile;
