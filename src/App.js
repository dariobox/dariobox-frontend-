import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './contexts/ProtectedRoute';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Navbar/>
                <Routes>
                    {/* Rutas públicas */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Rutas protegidas */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
