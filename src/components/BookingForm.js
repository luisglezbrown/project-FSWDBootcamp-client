import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { POST_BOOKING_NEW } from '../config/config';
import { useAuthContext } from "../context/AuthContext";
import jwt_decode from "jwt-decode";

import './style/BookingForm.css'


export default function Form({tour}){
    const {getToken} = useAuthContext();
    const history = useHistory();
    
    let {id} = useParams();
    let token = getToken();
    let tokenDecoded = jwt_decode(token);

    let currentDate = new Date();
    let today = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getUTCDate()}`

    const initialFormState = {userId: tokenDecoded.user.id, tourId: id, pax: "", date:""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook
    console.log(form)
    async function fetchNewBooking() {
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }
        const response = await fetch(POST_BOOKING_NEW, options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            history.push("/bookingcreated")
        } else {
            alert("La reserva no se hizo correctamente");
        }
    }

    async function handleSubmit(e){
        e.preventDefault();
        let selectedDate = new Date(Date.parse(form?.date)).getDay().toString();
        let availableDays = tour?.weekDays;

        !availableDays.includes(selectedDate) 
        ? alert('Oooops! Comprueba la fecha, el tour no se realiza el día seleccionado :(') 
        : fetchNewBooking()
    };
        
    // console.log("tour: " + tour);
    // console.log(tour);
    console.log("form: " + form);
    console.log(form);


    return(
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label className="form-label">¿Qué día?</label>
                <small>Tour disponible: {tour?.weekDays?.map(day => {if (day==="1") {return "lunes "} else if (day==="2") {return "martes "} else if (day==="3") {return "miércoles "} else if(day==="4") {return "jueves "} else if (day==="5") {return "viernes "} else if (day==="6") {return "sábados "} else if (day==="0") {return "domingos "} return "."})}</small>
                <input onChange={handleInputChange} value={form.date} name="date" type="date" placeholder="¿Qué día?" className="form-control" min={today} required/>
			</div>
            
            <div className="form-group">
                <label className="form-label">¿Cuántos sois?</label>
                <input onChange={handleInputChange} value={form.pax} name="pax" type="number" placeholder="Indica el total de personas" className="form-control" min="1" required/>
			</div>

            <input type="submit" value="RESERVAR" className="submit-btn"/>

        </form>
    )
}