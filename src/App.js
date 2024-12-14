import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Importa el contexto de autenticación
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';  // Página de inicio
import PrivateRoute from './contexts/PrivateRoute'; // Ruta privada
import NavBar from './components/NavBar';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <h1 className='bg-red-600'>Aplicación</h1>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home />} />  {/* Página principal */}
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />

                        {/* Ruta protegida para el Dashboard */}
                        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
