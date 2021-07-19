import { useHistory } from 'react-router';
import { DEL_BOOKING_CANCEL } from '../../config/config';
import { useAuthContext } from "../../context/AuthContext";

export default function BookingCancel({bookingId}) {    
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

        const response = await fetch(DEL_BOOKING_CANCEL + bookingId, options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            alert("Reserva cancelada");
            history.push("/login");
        } else {
            alert("Oooops! Algo fue mal");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Cancelar"/>
        </form>
    )
}
