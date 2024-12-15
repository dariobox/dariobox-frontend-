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
            className="bg-blue-500 rounded-md flex-row"
        >
            Cerrar sesión
            <LogOut color="currentColor" />
        </button>
    );
};

export default LogoutButton;
