import { Redirect, useHistory } from "react-router";
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useAuthContext } from "../context/AuthContext";

import './style/LoginForm.css'

export default function LoginForm() {
    const {signIn} = useAuthContext();
    const history = useHistory();

    const initialFormState = {username: "", password: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook


    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch("http://127.0.0.1:8000/api/login_check", options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            signIn(data.token, data.user);
            history.push("/myaccount")
        } else {
            alert("Login incorrecto");
        }
    }
    

    return (
        <section className="login-container">
            <div className="login-left">
                <h1>¡Nos encanta volver a verte!</h1>
                <p>Introduce tu email y contraseña para acceder al área privada</p>
                <Link to='/newuser' className="secondary-action">¿No estás registrado? Crea una cuenta</Link>

            </div>

            <div className="login-right">
                <form onSubmit={handleSubmit} className="form-container">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input onChange={handleInputChange} value={form.username} name="username" type="email" placeholder="usuario@tuemail.com" className="form-control" required/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Contraseña</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" placeholder="******" className="form-control" required/>
                    </div>

                    <input type="submit" value="Iniciar sesión" className="submit-btn"/>

                </form>
            </div>
        </section>
    )
}
