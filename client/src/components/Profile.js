import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('https://kryptonev2.onrender.com/auth/user', {
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => setProfile(data.user))
            .catch(error => console.error('Error fetching profile:', error));
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Welcome, {profile.name}</h2>
            <p>ID: {profile.id}</p>
            {profile.memberships && profile.memberships.length > 0 && (
                <div>
                    <h3>Memberships</h3>
                    <ul>
                        {profile.memberships.map((membership, index) => (
                            <li key={index}>
                                {membership.tier || 'No Tier'} (ID: {membership.id})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Profile;
