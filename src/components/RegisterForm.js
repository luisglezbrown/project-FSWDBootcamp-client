import { useForm } from '../hooks/useForm';
import { useHistory } from 'react-router';
import { POST_USER_NEW } from '../config/config';

import './style/RegisterForm.css'

export default function RegisterForm() {
    const history = useHistory();

    const initialFormState = {email: "", password: "", name: "", lastname: "", phone: "", role:["ROLE_USER"], shortDesc:"", description:""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook


    async function handleSubmit(e){
        e.preventDefault();
        

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(POST_USER_NEW, options);
        const data = await response;
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            history.push("/accountcreated?role=user")
        } else {
            alert("¡Algo fue mal, vuelve a intentarlo!");
        }
    }
    

    return (
        <section className="register-container">
            <h1>Regístrate en Localz</h1>
            <p>Únete a localz y reserva los mejores free-tours.</p>
            <p>Si tecleas rápido y no piensas demasiado la contraseña te llevará menos de un minuto... ¡y es GRATIS!</p>
            <form onSubmit={handleSubmit} className="register-form-container">
                <fieldset> 
                    <legend>Tus datos de acceso:</legend> 
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input onChange={handleInputChange} value={form.email} name="email" type="email" placeholder="usuario@tuemail.com" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Contraseña</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" placeholder="******" className="form-control" required/>
                    </div>
                </fieldset>

                <fieldset> 
                    <legend>Tus datos personales:</legend> 
                    <div className="form-group">
                        <label className="form-label">Nombre</label>
                        <input onChange={handleInputChange} value={form.name} name="name" type="text" placeholder="Nombre" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Apellidos</label>
                        <input onChange={handleInputChange} value={form.lastname} name="lastname" type="text" placeholder="Apellidos" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Teléfono</label>
                        <input onChange={handleInputChange} value={form.phone} name="phone" type="tel" placeholder="600600600" className="form-control" required/>
                    </div>
                </fieldset>

                <input type="submit" value="Crear cuenta" className="submit-btn"/>

            </form>
        </section>
    )
}
