import { useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

import './style/BookingForm.css'


export default function Form({booking, setBooking, tour}){

    let {id} = useParams();

    const initialFormState = {tour: id, pax: "", date:"", status: "active"};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        let selectedDate = new Date(Date.parse(form?.date)).getDay().toString();
        let availableDays = tour?.weekDays;

        !availableDays.includes(selectedDate) 
        ? alert('Oooops! Comprueba la fecha, el tour no se realiza el día seleccionado :(') 
        : alert();
        
        
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