// NO ELIMINAR, ROMPE LA PAGINA

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('https://kryptonev2.onrender.com/auth/user', {
                    credentials: 'include'
                });
                const result = await response.json();
                console.log("Auth check result:", result);

                if (result.isAuthenticated) {
                    setIsAuthenticated(true);
                    setUser(result.user);
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
                setIsAuthenticated(false);
                setUser(null);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
