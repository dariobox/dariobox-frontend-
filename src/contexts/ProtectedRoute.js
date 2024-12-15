import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
    const { verifyToken } = useAuth();

    // Verifica si el token está presente en el localStorage
    const isAuthenticated = verifyToken();

    // Si no está autenticado, redirige a la página de inicio de sesión
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
