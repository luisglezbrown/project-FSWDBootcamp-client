import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

import './style/LoginForm.css'

export default function LoginForm() {

    const initialFormState = {email: "", password: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        //TODO: Introducir la lógica del formulario.
    };

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
                        <input onChange={handleInputChange} value={form.email} name="email" type="email" placeholder="usuario@tuemail.com" className="form-control" required/>
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
