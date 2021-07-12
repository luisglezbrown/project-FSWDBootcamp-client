import { /* Redirect, */ useHistory, useLocation } from "react-router";
import { useForm } from '../hooks/useForm';
import { useAuthContext } from "../context/AuthContext";
import { LOGIN_URL } from '../config/config';

import './style/LoginForm.css'

export default function LoginForm() {
    const {signIn} = useAuthContext();
    const history = useHistory();
    let location = useLocation()
    console.log(location);
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
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            signIn(data.token, data.user);
            location.pathname === "/login" && history.push("/myaccount")
        } else {
            alert("Login incorrecto");
        }
    }
    

    return (
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
    )
}
