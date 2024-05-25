// src/components/Profile.js

import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="text-white p-4">
            <h2 className="text-2xl font-bold">Welcome, {user.name}</h2>
            <p>ID: {user.id}</p>
            {user.memberships.length > 0 ? (
                <div>
                    <h3 className="text-xl font-semibold">Memberships</h3>
                    {user.memberships.map((membership, index) => (
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
