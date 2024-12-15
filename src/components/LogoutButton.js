import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar token y otros datos relacionados con la sesión
        localStorage.removeItem('token');
        localStorage.removeItem('is_superuser');
        localStorage.removeItem('user_data'); // Agrega cualquier otra clave que utilices

        // Redirigir al usuario a la página de inicio de sesión
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="flex gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
        >
            Cerrar sesión
            <LogOut color="currentColor" />
        </button>
    );
};

export default LogoutButton;
