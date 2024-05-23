import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/auth/profile', {
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(error => console.error('Error fetching profile:', error));
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Welcome, {profile.displayName}</h2>
            <p>Email: {profile._json.email}</p>
            <img src={profile.photos[0].value} alt="Profile" />
        </div>
    );
};

export default Profile;
