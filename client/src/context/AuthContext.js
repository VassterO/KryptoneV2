// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated and fetch user data
        const checkAuth = async () => {
            try {
                const response = await fetch('https://kryptonev2.onrender.com/auth/user', {
                    credentials: 'include', // Include credentials in the request
                });
                const result = await response.json();
                console.log('Auth Check Result:', result); // Debug log
                if (result.isAuthenticated) {
                    setIsAuthenticated(true);
                    setUser(result.user);
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
