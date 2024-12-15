import React, { createContext, useContext } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    // Función para verificar si el token existe en el localStorage
    const verifyToken = () => {
        const token = localStorage.getItem('token');
        return !!token; // Retorna true si el token existe, de lo contrario false
    };

    return (
        <AuthContext.Provider value={{ verifyToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto
export const useAuth = () => {
    return useContext(AuthContext);
};
