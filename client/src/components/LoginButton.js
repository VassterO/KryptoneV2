import React from 'react';

const LoginButton = () => {
    const handleLogin = () => {
        window.location.href = 'https://kryptonefacilities.netlify.app/';
    };

    return (
        <button onClick={handleLogin} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
            Login with Patreon
        </button>
    );
};

export default LoginButton;
