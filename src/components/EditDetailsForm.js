// import { useEffect, useState } from "react";
import { useForm } from '../hooks/useForm';
import { PUT_USER_UPDATE } from '../config/config';
import { useAuthContext } from "../context/AuthContext";

export default function EditDetailsForm({user}) {

    const {getToken} = useAuthContext();
    console.log(user)
    
    const initialFormState = {email: user.email, password: "", name: user.name, lastname: user.lastname, phone: user.phone, shortDesc: user.shortDesc, description: user.description};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook
    console.log("form:");
    console.log(form);

    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
            body: JSON.stringify(form)
        }

        const response = await fetch(PUT_USER_UPDATE + user.id, options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            alert("Datos actualizados correctamente");
        } else {
            alert("Oooops! Algo fue mal");
        }
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
                        <input onChange={handleInputChange} value={form.shortDesc} name="shortDesc" type="text" id="shortDesc" placeholder="Descríbete en una frase (max: 200 carácteres, opcional)" className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <input onChange={handleInputChange} value={form.description} name="description" type="text" id="description" placeholder="¡Queremos saber de ti! (opcional)" className="form-control"/>
                    </div>
                </fieldset>

                <input type="submit" value="Actualiza tus datos" className="submit-btn"/>

            </form>


    )
}
