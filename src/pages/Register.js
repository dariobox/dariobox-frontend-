import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

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

        const { username, email, password, password2 } = formData;

        if (password !== password2) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/dariobox/access/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password, password2 })
            });

            const result = await response.json();
            if (response.ok) {
                setMessage('Usuario registrado con éxito');
            } else {
                setError(result.detail || 'Error en el registro');
            }
        } catch (err) {
            setError('Hubo un error en la solicitud');
        }
    };

    return (
        <div>
            <h2>Registro</h2>
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
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password2"
                    placeholder="Confirmar contraseña"
                    value={formData.password2}
                    onChange={handleChange}
                />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
