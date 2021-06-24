import { useForm } from '../hooks/useForm';

import './style/RegisterForm.css'

export default function RegisterForm() {

    const initialFormState = {email: "", password: "", name: "", surname: "", phone: "", role: "user"};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        //TODO: Introducir la lógica del formulario.
    };

    return (
        <section className="register-container">
            <h1>Regístrate en Localz</h1>
            <p>Únete a localz y reserva los mejores free-tours.</p>
            <p>Si tecleas rápido y no piensas demasiado la contraseña te llevará menos de un minuto... ¡y es GRATIS!</p>
            <form onSubmit={handleSubmit} className="register-form-container">
                <fieldset> 
                    <legend>Tus datos de acceso:</legend> 
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input onChange={handleInputChange} value={form.email} name="email" type="email" placeholder="usuario@tuemail.com" className="form-control" required/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Contraseña</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" placeholder="******" className="form-control" required/>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Repite la contraseña</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" placeholder="******" className="form-control" required/>
                    </div>
                {/* TODO: ¿Cómo gestionar la validación de contraseñas? */}
                </fieldset>

                <fieldset> 
                    <legend>Tus datos personales:</legend> 
                    <div class="form-group">
                        <label class="form-label">Nombre</label>
                        <input onChange={handleInputChange} value={form.name} name="name" type="text" placeholder="Nombre" className="form-control" required/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Apellidos</label>
                        <input onChange={handleInputChange} value={form.surname} name="surname" type="text" placeholder="Apellidos" className="form-control" required/>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Teléfono</label>
                        <input onChange={handleInputChange} value={form.phone} name="phone" type="tel" placeholder="600600600" className="form-control" required/>
                    </div>
                </fieldset>

                <input type="submit" value="Crear cuenta" className="submit-btn"/>

            </form>

        </section>
    )
}
