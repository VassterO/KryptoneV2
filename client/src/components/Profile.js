import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            setProfile(user);
        }
    }, [user, isAuthenticated]);

    if (!profile) {
        return <div>Loading...</div>;
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
