import { useState } from "react";
import { useForm } from '../hooks/useForm';

import './style/GuideRegisterForm.css'

export default function GuideRegisterForm() {

    const initialFormState = {email: "", password: "", name: "", lastname: "", phone: "", role:["ROLE_GUIDE"], shortDesc:"", description:""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook
    const [image, setImage] = useState('');

    const handleImageUpload = e => setImage(e.target.files[0]);
    console.log(image);

    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch("http://127.0.0.1:8000/api/register", options);
        const data = await response.json();
        console.log(data);


        const formImage = new FormData();
        formImage.append("File", image);
        
        const optionsImage = {
            method: "POST",
            // headers: {"Content-Type": "multipart/form-data"},
            body: formImage
        }

        const responseImage = await fetch(`http://127.0.0.1:8000/api/uploadguideimage/${data.id}`, optionsImage);
        const dataImage = await responseImage;
        console.log(dataImage);
    }

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
                        <label htmlFor="lastname" className="form-label">Apellidos</label>
                        <input onChange={handleInputChange} value={form.lastname} name="lastname" type="text" id="lastname" placeholder="Apellidos" className="form-control" required/>
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
                        <input onChange={handleImageUpload} name="imgpath" type="file" id="imgpath" className="form-control" accept="png jpg jpeg" />
                    </div>
                </fieldset>

                <input type="submit" value="Crear cuenta" className="submit-btn"/>

            </form>


    )
}
