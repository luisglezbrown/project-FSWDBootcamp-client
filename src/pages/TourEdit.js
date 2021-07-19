import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../hooks/useForm';
import { useAuthContext } from "../context/AuthContext";
import { PUT_TOUR_UPDATE, GET_CATEGORY_ALL, POST_TOUR_IMG } from '../config/config';
import { useLocation } from 'react-router-dom';
import TourDelete from '../components/actions/TourDelete';

export default function TourEdit() {
    const {getToken} = useAuthContext();
    let token = getToken();

    const history = useHistory();
    const location = useLocation()
    const { id, title, duration, highlight, startingTime, meetingPoint, description, city } = location.state;

    const [categoriesList, setCategoriesList] = useState([]);
    useEffect(() => {
        fetch(GET_CATEGORY_ALL)
        .then(response => response.json())
        .then(data => setCategoriesList(data));
    }, []);

    const daysList = [
        {id: 1, name: "Lunes"},
        {id: 2, name: "Martes"},
        {id: 3, name: "Miércoles"},
        {id: 4, name: "Jueves"},
        {id: 5, name: "Viernes"},
        {id: 6, name: "Sábado"},
        {id: 0, name: "Domingo"}
    ];

    const initialFormState = {title: title, duration: duration, highlight: highlight, startingTime: startingTime, meetingPoint: meetingPoint, description: description};
    const [form, 
        handleInputChange, 
        handleCatCheckboxChange, 
        catCheckedState, 
        handleDaysCheckboxChange, 
        daysCheckedState] = useForm(initialFormState, categoriesList, daysList);
    console.log('form: ')
    console.log(form);


    async function handleSubmit(e) {
        e.preventDefault();

        /* Este bloque es el fetch del json sin imagen */
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(form)
        }

        const response = await fetch(PUT_TOUR_UPDATE + id, options);
        // eslint-disable-next-line
        const data = await response.json();

        if(response.status >= 200 && response.status < 300) {
            alert("Tour actualizado correctamente");
            history.push("/myaccount")
        } else {
            alert("El tour no se actualizó correctamente");
        }
    }


    /* Este bloque gestiona los cambios en la carga de imagen */
    const [image, setImage] = useState('');
    const handleImageUpload = e => setImage(e.target.files[0]);
    
    async function handleImageSubmit(e) {
        e.preventDefault();

        /* Este bloque es el fetch de la imagen */
        const formImage = new FormData();
        formImage.append("File", image);
        
        const optionsImage = {
            method: "POST",
            body: formImage
        }

        const responseImage = await fetch(POST_TOUR_IMG + id, optionsImage);
        const dataImage = await responseImage;
        console.log(dataImage);

        if(responseImage.status >= 200 && responseImage.status < 300) {
            alert("Imagen actualizada correctamente");
            history.push("/myaccount")
        } else {
            alert("La imagen no se actualizó correctamente");
        }
    }


    return (
        <section className="register-container">
            <h1>¡Que los cambios sirvan para mejorar!</h1>
            <p>Abajo están los datos del tour, modifica lo que desees pero que mejore lo presente :)</p>
            <form onSubmit={handleSubmit} className="register-form-container">
                <fieldset> 
                    <legend>Los detalles del tour:</legend> 
                    
                    <div className="form-group">
                        <label htmlFor="city_id" className="form-label">Ciudad</label>
                        <select required name="cityId" disabled>
                            <option>{city.name} (No modificable)</option> 
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Nombre</label>
                        <small>Ponle nombre a la criatura, trata de ser original.</small>
                        <input onChange={handleInputChange} value={form.title} name="title" type="text" placeholder="Por ejemplo: 'Leyendas del Barrio de las letras'" required/>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Resumen</label>
                        <small>¡Capta la atención de los viajeros con menos 250 caracteres que definan tu free-tour!</small>
                        <input onChange={handleInputChange} value={form.highlight} name="highlight" type="text" placeholder="Un ejemplo sería 'Un paseo inolvidable por Cartagena.'" required/>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Descripción</label>
                        <small>Describe todo lo que verán durante el tiempo que compartirás con los viajeros. ¡No olvides incluir cualquier recomendación importante!</small>
                        <textarea onChange={handleInputChange} value={form.description} name="description" type="text" placeholder="No hay límite de caracteres, tu teclado debe echar humo..." required/>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Hora de inicio</label>
                        <small>¿A qué hora comienza el tour?</small>
                        <input onChange={handleInputChange} value={form.startingTime} name="startingTime" type="time" required/>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Duración</label>
                        <small style={{display: 'inline'}}>Aproximadamente, mi tour durará unas </small>
                        <input onChange={handleInputChange} value={form.duration} name="duration" type="number" step="0.25" min="0" style={{width: '6rem', display: 'inline'}} placeholder="Si tu free-tour dura dos horas y media, aquí sería '2.5'" required/>
                        <small style={{display: 'inline', margin: 0}}> horas.</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableWeekDays" className="form-label">Días de celebración</label>
                        <small>Selecciona qué día/s se realiza el tour.</small>
                    </div>
                    <div id="availableWeekDays">
                        {daysList.map((day, index )=><small className="check" key={day.id}> <input type="checkbox" name="weekDays" value={day.id} checked={daysCheckedState[index]} onChange={() => handleDaysCheckboxChange(index)} key={day.id}/>{day.name}</small>)}
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Punto de encuentro</label>
                        <small>¿Dónde te reunirás con ellos? ¿Cómo te reconocerán?</small>
                        <textarea onChange={handleInputChange} value={form.meetingPoint} name="meetingPoint" type="text" placeholder="Place Charles de Gaulle, justo en la esquina frente al McDonald's. Me reconoceréis por el paraguas verde :)" required className="meeting-point"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="categories" className="form-label">Categorías</label>
                        <small>Selecciona aquellas categorías para tu tour.</small>
                    </div>
                    <div id="categories">
                        {categoriesList.map((category, index)=> <small className="check" key={category.id} ><input type="checkbox" name="categories" value={category.id} checked={catCheckedState[index]} onChange={() => handleCatCheckboxChange(index)} key={category.id} /> {category.tag}</small>)}
                    </div>
                    <input type="submit" value="Editar mi tour" className="submit-btn"/>

                </fieldset>
            </form>


            <form onSubmit={handleImageSubmit} className="register-form-container">
                <fieldset> 
                    <legend>Cambia la imagen:</legend>                    
                    <div className="form-group">
                        <label htmlFor="imgpath" className="form-label">Foto</label>
                        <small>Sube una foto de algo representativo o de un grupo de viajeros. Los tours con foto son más llamativos y tienen hasta un 70% más de reservas.</small>
                        <input onChange={handleImageUpload} name="imgpath" type="file" id="imgpath" accept="png jpg jpeg"/>
                    </div>
                    <input type="submit" value="Editar foto" className="submit-btn"/>
                </fieldset>
            </form>

            <TourDelete tourId={id}/>
        </section>

    )
}
