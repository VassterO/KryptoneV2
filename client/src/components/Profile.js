// src/components/Profile.js

import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user, isAuthenticated } = useAuth();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('https://kryptonev2.onrender.com/auth/user', {
                    credentials: 'include'
                });
                const result = await response.json();
                if (result.isAuthenticated) {
                    setProfile(result.user);
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return <div>Loading profile...</div>;
    }

    return (
        <div className="text-white p-4">
            <h2 className="text-2xl font-bold">Welcome, {profile.name}</h2>
            <p>ID: {profile.id}</p>
            {profile.memberships.length > 0 ? (
                <div>
                    <h3 className="text-xl font-semibold">Memberships</h3>
                    {profile.memberships.map((membership, index) => (
                        <div key={index} className="p-2 border-b border-gray-700">
                            <p>Membership ID: {membership.id}</p>
                            <p>Tier: {membership.tier || 'Unknown Tier'}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No memberships</p>
            )}
        </div>
    );
};

export default Profile;
