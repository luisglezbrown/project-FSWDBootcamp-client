import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useLocation } from 'react-router';
import { PUT_USER_UPDATE, POST_USER_IMG } from '../config/config';
import { useAuthContext } from "../context/AuthContext";
import UserDelete from '../components/actions/UserDelete';

export default function UserEdit() {
    const {getToken} = useAuthContext();
    const {isGuide} = useAuthContext();
    const token = getToken();

    const location = useLocation()
    const { id, email, name, lastname, phone, shortDesc, description } = location.state;

    const initialFormState = {email: email, password: "", name: name, lastname: lastname, phone: phone, shortDesc: shortDesc, description: description};
    const [form, handleInputChange] = useForm(initialFormState);

    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(form)
        }

        const response = await fetch(PUT_USER_UPDATE + id, options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            alert("Datos actualizados correctamente");
        } else {
            alert("Oooops! Algo fue mal");
        }
    }
    
        
    const [image, setImage] = useState('');
    const handleImageUpload = e => setImage(e.target.files[0]);

    async function handleImageSubmit(e) {
        e.preventDefault();

        const formImage = new FormData();
        formImage.append("File", image);
        
        const optionsImage = {
            method: "POST",
            body: formImage
        }

        const responseImage = await fetch(POST_USER_IMG + id, optionsImage);
        const dataImage = await responseImage;
        console.log(dataImage);

        if(responseImage.status >= 200 && responseImage.status < 300) {
            alert("Imagen actualizada correctamente");
        } else {
            alert("Oooops! Algo fue mal");
        }
    }

    return (
        <section className="register-container">
            <h1>Actualiza tus datos</h1>
            <p>Modifica sólo aquellos datos que quieras cambiar en nuestros registros</p>
            <form onSubmit={handleSubmit} className="register-form-container">
                <fieldset> 
                    <legend>Tus datos personales:</legend> 
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input onChange={handleInputChange} value={form.email} name="email" type="email" placeholder="usuario@tuemail.com" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Contraseña</label>
                        <input onChange={handleInputChange} value={form.password} name="password" type="password" placeholder="******" className="form-control" required/>
                    </div>

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

                    {isGuide() && <><div className="form-group">
                        <label htmlFor="shortDesc" className="form-label">Resumen</label>
                        <input onChange={handleInputChange} value={form.shortDesc} name="shortDesc" type="text" id="shortDesc" placeholder="Descríbete en una frase (max: 200 carácteres)" className="form-control" required/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <textarea onChange={handleInputChange} value={form.description} name="description" type="text" id="description" placeholder="Cuenta a todos los motivos para elegirte como localz" className="form-control"required/>
                    </div></>}

                    <input type="submit" value="enviar cambios" className="submit-btn"/>
                </fieldset>
            </form>

            {isGuide() && 
            <form onSubmit={handleImageSubmit} className="register-form-container">
                <fieldset>
                    <legend>Foto de perfil:</legend> 
                    <div className="form-group">
                        <label htmlFor="imgpath" className="form-label">¡Que bien se te ve!</label>
                        <small>¿Has cambiado de imagen? ¿Te has hecho una nueva foto en la que estás radiante? Cambia aquí tu foto de perfil</small>
                        <input onChange={handleImageUpload} name="imgpath" type="file" id="imgpath" className="form-control" accept="png jpg jpeg" />
                    </div>
                    <input type="submit" value="Cambiar imagen de perfil" className="submit-btn"/>
                </fieldset>
            </form>}

            <UserDelete id={id}/>
            {/* TODO ELIMINAR USER */}

        </section>
    )
}