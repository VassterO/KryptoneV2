import React from 'react';

const LogoutButton = () => {
    return (
        <a href="/auth/logout" className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded">
            Logout
        </a>
    );
};

export default LogoutButton;
