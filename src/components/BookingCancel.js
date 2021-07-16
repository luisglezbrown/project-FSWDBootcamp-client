import { useHistory } from 'react-router';
import { PATCH_BOOKING_CANCEL } from '../config/config';
import { useAuthContext } from "../context/AuthContext";

export default function BookingCancel({bookingId}) {    
    const history = useHistory();
    const {getToken} = useAuthContext();

    async function handleSubmit(e) {
        e.preventDefault();

        const options = {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
        }

        const response = await fetch(PATCH_BOOKING_CANCEL + bookingId, options);
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
