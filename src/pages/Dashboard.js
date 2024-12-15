import React, { useEffect, useState } from 'react';
import LogoutButton from "../components/LogoutButton";

const Dashboard = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const isSuperUser = localStorage.getItem('is_superuser');
        if (isSuperUser === 'true') {
            setMessage('Hola Superuser');
        } else {
            setMessage('Hola Bienvenido');
        }
    }, []);

    return (
        <div>
            <LogoutButton/>
            <h2>Dashboard</h2>
            <p>{message}</p>
        </div>
    );
};

export default Dashboard;
