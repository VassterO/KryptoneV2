import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        console.log("Authentication status:", isAuthenticated);
        console.log("User data:", user);

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
        <div className="p-4">
            <h2 className="text-white text-2xl">Welcome, {profile.name}</h2>
            {profile.memberships && profile.memberships.length > 0 && (
                <p className="text-white">Current Plan: {profile.memberships[0].tier}</p>
            )}
        </div>
    );
};

export default Profile;
