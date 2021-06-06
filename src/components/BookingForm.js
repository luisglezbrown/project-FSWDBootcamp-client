import { useParams } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

import './style/BookingForm.css'


export default function Form({booking, setBooking}){

    let {id} = useParams();

    const initialFormState = {tourId: id, nPax: "", date: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        setBooking(form)
    };

    return(
        <form onSubmit={handleSubmit} className="form-container">
            <div class="form-group">
                <label class="form-label">¿Qué día?</label>
                <input onChange={handleInputChange} value={form.date} name="date" type="date" placeholder="¿Qué día?" className="form-control" required/>
			</div>
            
            <div class="form-group">
                <label class="form-label">¿Cuántos sois?</label>
                <input onChange={handleInputChange} value={form.nPax} name="nPax" type="number" placeholder="Indica el total de personas" className="form-control" required/>
			</div>

            <input type="submit" value="RESERVAR" className="submit-btn"/>

        </form>
    )
}