import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Rocket, Trophy } from "lucide-react";
import ScrollToggle from "../hooks/ScrollToggle ";
import LogoutButton from "./LogoutButton";

export default function NavBar() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Updated animation variants for the menu
  const menuVariants = {
    initial: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <ScrollToggle>
      <header className="fixed w-full bg-white dark:bg-zinc-900 shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/dashboard" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                className="transition-transform duration-300"
              >
                <Rocket className="h-8 w-8 text-fuchsia-500 group-hover:text-cyan-500 dark:text-emerald-400 dark:group-hover:text-fuchsia-400 transition-colors duration-300" />
              </motion.div>
              <span className="text-2xl font-bold text-zinc-900 group-hover:text-fuchsia-500 dark:text-white dark:group-hover:text-emerald-400 transition-colors duration-300">
                Beta
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {isAuthenticated ? (
                <motion.div className="flex items-center space-x-6">
                  <Link
                    to="challenges/"
                    className="flex items-center gap-2 text-zinc-800 hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-emerald-400 transition-all duration-300 text-lg font-medium"
                  >
                    Challenges
                    <Trophy className="h-5 w-5" />
                  </Link>
                  <LogoutButton className="bg-fuchsia-500 hover:bg-cyan-500 dark:bg-emerald-400 dark:hover:bg-fuchsia-400 text-white px-6 py-2.5 rounded-md transition-all duration-300 transform hover:scale-105" />
                </motion.div>
              ) : (
                <motion.div className="flex items-center space-x-6">
                  <Link
                    to="/contact"
                    className="text-zinc-800 hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-emerald-400 transition-colors duration-300 text-lg font-medium"
                  >Contact
                  </Link>
                  <Link
                    to="/login"
                    className="text-zinc-800 hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-emerald-400 transition-colors duration-300 text-lg font-medium"
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/register"
                    className="px-6 py-2.5 rounded-md bg-fuchsia-500 hover:bg-cyan-500 dark:bg-emerald-400 dark:hover:bg-fuchsia-400 text-white transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    Register
                  </Link>

                  
                </motion.div>
              )}

              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDark}
                className="p-3 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-all duration-300"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-all duration-300"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Updated Animation */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={menuVariants}
              className="md:hidden overflow-hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800"
            >
              <motion.div className="px-4 py-6 space-y-4">
                {isAuthenticated ? (
                  <>
                    <motion.div variants={itemVariants}>
                      <Link
                        to="challenges/"
                        className="flex items-center gap-2 p-3 rounded-lg text-zinc-800 hover:text-white dark:text-zinc-200 hover:bg-fuchsia-500 dark:hover:bg-emerald-400 transition-all duration-300 text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <Trophy className="h-6 w-6" />
                        Challenges
                      </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <LogoutButton 
                        className="w-full bg-fuchsia-500 hover:bg-cyan-500 dark:bg-emerald-400 dark:hover:bg-fuchsia-400 text-white p-3 rounded-lg transition-all duration-300 text-lg font-medium text-center"
                        onClick={() => setIsOpen(false)}
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div variants={itemVariants}>
                      <Link
                        to="/login"
                        className="flex items-center gap-2 p-3 rounded-lg text-zinc-800 hover:text-white dark:text-zinc-200 hover:bg-fuchsia-500 dark:hover:bg-emerald-400 transition-all duration-300 text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Link>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Link
                        to="/contact"
                        className="flex items-center gap-2 p-3 rounded-lg text-zinc-800 hover:text-white dark:text-zinc-200 hover:bg-fuchsia-500 dark:hover:bg-emerald-400 transition-all duration-300 text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Link
                        to="/register"
                        className="flex items-center gap-2 p-3 rounded-lg bg-fuchsia-500 hover:bg-cyan-500 dark:bg-emerald-400 dark:hover:bg-fuchsia-400 text-white transition-all duration-300 text-lg font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        Register
                      </Link>
                    </motion.div>
                  </>
                )}

                {/* Mobile Dark Mode Toggle */}
                <motion.button
                  variants={itemVariants}
                  onClick={() => {
                    toggleDark();
                    setIsOpen(false);
                  }}
                  className="w-full p-3 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-all duration-300 flex items-center justify-center gap-3 text-lg font-medium"
                >
                  {isDark ? (
                    <>
                      <Sun className="h-6 w-6" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-6 w-6" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="h-20"></div>
    </ScrollToggle>
  );
}