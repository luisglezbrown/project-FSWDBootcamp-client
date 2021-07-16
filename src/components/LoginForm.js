import { /* Redirect, */ useHistory, useLocation } from "react-router";
import { useForm } from '../hooks/useForm';
import { useAuthContext } from "../context/AuthContext";
import { LOGIN_URL } from '../config/config';
import { Link } from 'react-router-dom';
import useQuery from "../hooks/useQuery";
import jwt_decode from "jwt-decode";

import './style/LoginForm.css'

export default function LoginForm() {
    const {signIn} = useAuthContext();
    const history = useHistory();
    let currentLocation = useLocation().pathname;
    let redirectQuery = useQuery("to");

    const initialFormState = {username: "", password: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options);
        const data = await response.json();
        
        // const token = data?.token;
        // const user = jwt_decode(data?.token);

        if(response.status >= 200 && response.status < 300) {
            signIn(data?.token, jwt_decode(data?.token));
            currentLocation === "/login" && (redirectQuery === "newtour" ? history.push("/newtour") : history.push("/myaccount"))
        } else {
            alert("Login incorrecto");
        }
    }
    

    return (
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input onChange={handleInputChange} value={form.username} name="username" type="email" placeholder="usuario@tuemail.com" className="form-control" required/>
                </div>
                
                <div className="form-group">
                    <label className="form-label">Contraseña</label>
                    <input onChange={handleInputChange} value={form.password} name="password" type="password" placeholder="******" className="form-control" required/>
                </div>
                <input type="submit" value="Iniciar sesión" className="submit-btn"/>
                {currentLocation !== "/login" && <Link to='/newuser' className="secondary-action">¿No estás registrado? Crea una cuenta</Link>}
            </form>
    )
}
