import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

import './style/BookingForm.css'


export default function Form({tour}){
    const history = useHistory();
    let {id} = useParams();
// TODO: Quitar el userId Harcodeado
    const initialFormState = {userId: "31", tourId: id, pax: "", date:"", status: "active"};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook
    
    async function fetchNewBooking() {
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }
        const response = await fetch("http://127.0.0.1:8000/api/newbooking", options);
        const data = await response.json();
        console.log(data);

        if(response.status >= 200 && response.status < 300) {
            alert("¡Reserva creada correctamente!");
            history.push("/myaccount")
        } else {
            alert("Login incorrecto");
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
            <div class="form-group">
                <label class="form-label">¿Qué día?</label>
                <small>Tour disponible: {tour?.weekDays?.map(day => {if (day==="1") {return "lunes "} else if (day==="2") {return "martes "} else if (day==="3") {return "miércoles "} else if(day==="4") {return "jueves "} else if (day==="5") {return "viernes "} else if (day==="6") {return "sábados "} else if (day==="0") {return "domingos "} return "."})}</small>
                <input onChange={handleInputChange} value={form.date} name="date" type="date" placeholder="¿Qué día?" className="form-control" /* required *//>
			</div>
            
            <div class="form-group">
                <label class="form-label">¿Cuántos sois?</label>
                <input onChange={handleInputChange} value={form.pax} name="pax" type="number" placeholder="Indica el total de personas" className="form-control" required/>
			</div>

            <input type="submit" value="RESERVAR" className="submit-btn"/>

        </form>
    )
}