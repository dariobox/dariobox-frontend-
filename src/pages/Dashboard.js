import React, { useEffect, useState } from 'react';

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
            <h2>Dashboard</h2>
            <p>{message}</p>
        </div>
    );
};

export default Dashboard;
