import { useHistory } from 'react-router';
import { DEL_TOUR_CANCEL } from '../../config/config';
import { useAuthContext } from "../../context/AuthContext";

export default function TourDelete({tourId}) {    
    const history = useHistory();
    const {getToken} = useAuthContext();
    const token = getToken();

    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "PATCH",
            headers: {
                "Authorization": "Bearer " + token
            },
        }

        const response = await fetch(DEL_TOUR_CANCEL + tourId, options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            alert("Se han cancelado todas las reservas y el tour ya no está disponible.");
            history.push("/login");
        } else {
            alert("Oooops! Algo fue mal");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="register-form-container">
            <fieldset> 
                    <legend>Elimina el tour:</legend>                    
                    <div className="form-group">
                        <label htmlFor="imgpath" className="form-label">¡Atención!</label>
                        <small>Se cancelarán todas las reservas actuales y la información del tour no se podrá recuperar. ¿Estás seguro que deseas eliminar el tour?</small>
                    </div>
                    <input type="submit" value="Eliminar tour" className="submit-btn"/>
                </fieldset>
        </form>
    )
}
