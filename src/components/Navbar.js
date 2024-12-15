import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
    const { verifyToken } = useAuth();

    // Verificar si el usuario está autenticado
    const isAuthenticated = verifyToken();

    return (
        <header className="flex justify-between">
            <div>
                DarioBox
            </div>
            <nav>
                {isAuthenticated ? (
                    <div>
                        <LogoutButton />
                    </div>
                ) : (
                    <div>
                        <Link to="login">Login</Link>
                        <Link to="register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
