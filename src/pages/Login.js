import { Redirect } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';

export default function Login() {

    const {isAuthenticated} = useAuthContext();

    return isAuthenticated ? <Redirect to="/myaccount" /> : (
        <>
            <Navbar />
            <section className="login-container">
                <div className="login-left">
                    <h1>¡Nos encanta volver a verte!</h1>
                    <p>Introduce tu email y contraseña para acceder al área privada</p>
                    <Link to='/newuser' className="secondary-action">¿No estás registrado? Crea una cuenta</Link>
                </div>
                <div className="login-right">
                    <LoginForm />
                </div>
            </section>   
        </>
    )
}
