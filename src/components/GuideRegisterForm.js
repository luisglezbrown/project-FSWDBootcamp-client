import { useHistory } from "react-router";
import { useState } from "react";

import { useForm } from '../hooks/useForm';
import { POST_USER_NEW, POST_USER_IMG } from '../config/config';

import './style/GuideRegisterForm.css'

export default function GuideRegisterForm() {
    const history = useHistory();

    const initialFormState = {email: "", password: "", name: "", lastname: "", phone: "", role:["ROLE_GUIDE"], shortDesc:"", description:""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook
    const [image, setImage] = useState('');

    const handleImageUpload = e => setImage(e.target.files[0]);
    
    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(POST_USER_NEW, options);
        const data = await response.json();

        const formImage = new FormData();
        formImage.append("File", image);
        
        const optionsImage = {
            method: "POST",
            // headers: {"Content-Type": "multipart/form-data"},
            body: formImage
        }

        const responseImage = await fetch(POST_USER_IMG + data.id, optionsImage);
        // eslint-disable-next-line
        const dataImage = await responseImage;

        if(response.status >= 200 && response.status < 300) {
            history.push("/accountcreated?role=guide")
        } else {
            alert("Login incorrecto");
        }
    }

    return (

            <form onSubmit={handleSubmit} className="guide-register-form-container grid cardsx2">
                <fieldset> 
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
                        <label htmlFor="phone" className="form-label">Tel??fono</label>
                        <input onChange={handleInputChange} value={form.phone} name="phone" type="tel" id="phone" placeholder="600600600" className="form-control" required/>
                    </div>
                </fieldset>

                <fieldset> 
                    <legend>Sobre ti:</legend> 
                    <div className="form-group">
                        <label htmlFor="shortDesc" className="form-label">Resumen</label>
                        <input onChange={handleInputChange} value={form.shortDesc} name="shortDesc" type="text" id="shortDesc" placeholder="Descr??bete en una frase (max: 200 car??cteres)" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Descripci??n</label>
                        <input onChange={handleInputChange} value={form.description} name="description" type="text" id="description" placeholder="Cuenta a todos los motivos para elegirte como localz" className="form-control" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="imgpath" className="form-label">Tu foto de perfil</label>
                        <input onChange={handleImageUpload} name="imgpath" type="file" id="imgpath" className="form-control" accept="png jpg jpeg" />
                    </div>
                </fieldset>

                <fieldset> 
                    <legend>Tus datos de acceso:</legend> 
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={handleInputChange} value={form.email} name="email" type="email" id="email" placeholder="usuario@tuemail.com" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Contrase??a</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" id="password" placeholder="******" className="form-control" required/>
                    </div>
                    
                    <input type="submit" value="Crear cuenta" className="submit-btn"/>

                </fieldset>


            </form>


    )
}
