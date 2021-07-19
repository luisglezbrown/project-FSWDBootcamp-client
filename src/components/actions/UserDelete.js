import { useHistory } from 'react-router';
import { DELETE_USER } from '../../config/config';
import { useAuthContext } from "../../context/AuthContext";

export default function UserDelete({id}) {    
    const history = useHistory();
    const {getToken} = useAuthContext();
    const {signOut} = useAuthContext();
    const token = getToken();

    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            },
        }

        const response = await fetch(DELETE_USER + id, options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            alert("Se han cancelado todas las reservas, los tours y eliminado tu cuenta");
            history.push("/");
            signOut();
        } else {
            alert("Oooops! Algo fue mal");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="register-form-container">
            <fieldset> 
                <legend>Elimina tu cuenta:</legend>                    
                <div className="form-group">
                    <label htmlFor="imgpath" className="form-label">¡Atención!</label>
                    <small>Se cancelarán todas las reservas actuales y y todos los tours creados. ¿Estás seguro que deseas eliminar tu cuenta?</small>
                </div>
                <input type="submit" value="eliminar cuenta" className="submit-btn"/>
            </fieldset>
        </form>
    )
}
