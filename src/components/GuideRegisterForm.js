import { useForm } from '../hooks/useForm';

import './style/GuideRegisterForm.css'

export default function GuideRegisterForm() {

    const initialFormState = {email: "", password: "", name: "", surname: "", phone: "", role: "guide", shortDesc: "", description: "" }; //TODO: Cómo meter el nombre del archivo
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        //TODO: Introducir la lógica del formulario.
    };

    return (

            <form onSubmit={handleSubmit} className="guide-register-form-container">
                <fieldset className="w20"> 
                    <legend>Tus datos de acceso:</legend> 
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={handleInputChange} value={form.email} name="email" type="email" id="email" placeholder="usuario@tuemail.com" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" id="password" placeholder="******" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="repeat-password" className="form-label">Repite la contraseña</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" id="repeat-password" placeholder="******" className="form-control" required/>
                    </div>
                {/* TODO: ¿Cómo gestionar la validación de contraseñas? */}
                </fieldset>

                <fieldset className="w20"> 
                    <legend>Tus datos personales:</legend> 
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input onChange={handleInputChange} value={form.name} name="name" type="text" id="name" placeholder="Nombre" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="surname" className="form-label">Apellidos</label>
                        <input onChange={handleInputChange} value={form.surname} name="surname" type="text" id="surname" placeholder="Apellidos" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input onChange={handleInputChange} value={form.phone} name="phone" type="tel" id="phone" placeholder="600600600" className="form-control" required/>
                    </div>
                </fieldset>

                <fieldset className="w40"> 
                    <legend>Sobre ti:</legend> 
                    <div className="form-group">
                        <label htmlFor="shortDesc" className="form-label">Resumen</label>
                        <input onChange={handleInputChange} value={form.shortDesc} name="shortDesc" type="text" id="shortDesc" placeholder="Descríbete en una frase (max: 200 carácteres)" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <input onChange={handleInputChange} value={form.description} name="description" type="text" id="description" placeholder="Cuenta a todos los motivos para elegirte como localz" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="imgpath" className="form-label">Tu foto de perfil</label>
                        <input onChange={handleInputChange} value={form.imgpath} name="imgpath" type="file" id="imgpath" placeholder="¡Sube una foto tuya!" className="form-control" required/>
                        {/* //TODO: Cómo meter el nombre del archivo */}
                    </div>
                </fieldset>

                <input type="submit" value="Crear cuenta" className="submit-btn"/>

            </form>


    )
}
