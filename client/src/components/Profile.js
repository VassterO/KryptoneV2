import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setProfile(user);
        }
    }, [user]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Welcome, {profile.name}</h2>
            {profile.memberships && profile.memberships.length > 0 && (
                <p>Current Plan: {profile.memberships[0].tier}</p>
            )}
        </div>
    );
};

export default Profile;
