import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        const { username, password } = formData;

        try {
            const response = await fetch('http://localhost:8000/dariobox/access/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            if (response.ok) {
                localStorage.setItem('token', result.access);
                localStorage.setItem('is_superuser', result.is_superuser);

                if (result.is_superuser) {
                    setMessage('Hola Superuser');
                } else {
                    setMessage('Hola Bienvenido');
                }

                navigate('/dashboard'); 
            } else {
                setError(result.detail || 'Error en el login');
            }
        } catch (err) {
            setError('Hubo un error en la solicitud');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {message && <p>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
