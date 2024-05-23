import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated (implement your logic here)
        const checkAuth = async () => {
            try {
                const response = await fetch('/auth/check'); // Endpoint to check authentication status
                const result = await response.json();
                setIsAuthenticated(result.isAuthenticated);
            } catch (error) {
                console.error('Error checking authentication status:', error);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
