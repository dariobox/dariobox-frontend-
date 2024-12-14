import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate  } from 'react-router-dom';
import { motion } from "framer-motion"
import {LogOut    } from "lucide-react";

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >

      <button onClick={handleLogout} className="flex gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
        Cerrar sesión
      <LogOut     color="currentColor" />
      </button>
    </motion.div>
  );
};

export default LogoutButton;