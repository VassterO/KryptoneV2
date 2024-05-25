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
        return <div className="text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center py-8">
            <div className="p-8 bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl w-10/12 md:w-8/12 lg:w-6/12">
                <h2 className="text-4xl font-bold mb-4">Welcome, {profile.name}</h2>
                {profile.memberships && profile.memberships.length > 0 && (
                    <p className="text-xl mb-4">Current Plan: {profile.memberships[0].tier}</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
