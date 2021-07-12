import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from '../hooks/useForm';
import { GET_CITIES_ALL, GET_CATEGORY_ALL, POST_TOUR_NEW, POST_TOUR_IMG } from '../config/config';

import './style/RegisterForm.css'

export default function NewTourForm() {
    const history = useHistory();

    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetch(GET_CITIES_ALL)
        .then(response => response.json())
        .then(data => setCities(data.results))
    }, [])


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

    //TODO: Gestionar el userId, debe pillarlo del token
    const initialFormState = {userId: "1501", cityId: "", title: "", duration: Number(), highlight: "", startingTime: "", meetingPoint: "", description: ""};
    const [form, 
        handleInputChange, 
        handleCatCheckboxChange, 
        catCheckedState, 
        handleDaysCheckboxChange, 
        daysCheckedState] = useForm(initialFormState, categoriesList, daysList);
    // console.log(form);


    /* Este bloque gestiona los cambios en la carga de imagen */
    const [image, setImage] = useState('');
    const handleImageUpload = e => setImage(e.target.files[0]);

    async function handleSubmit(e) {
        e.preventDefault();

        /* Este bloque es el fetch del json sin imagen */
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(POST_TOUR_NEW, options);
        const data = await response.json();


        /* Este bloque es el fetch de la imagen */
        const formImage = new FormData();
        formImage.append("File", image);
        
        const optionsImage = {
            method: "POST",
            // headers: {"Content-Type": "multipart/form-data"},
            body: formImage
        }

        const responseImage = await fetch(POST_TOUR_IMG + data.id, optionsImage);
        const dataImage = await responseImage;
        console.log(dataImage);

        if(response.status >= 200 && response.status < 300) {
            history.push("/tourcreated")
        } else {
            alert("El tour no se creó correctamente correctamente");
        }
    }


    return (
        <section className="register-container">
            <h1>¡Aquí se cuece algo bueno!</h1>
            <p>Completa el formulario de abajo y tu tour será publicado en Localz</p>
            <p>Los datos que introduzcas serán tu carta de presentación frente al resto de usuarios, cuida tu ortografía.</p>
            <form onSubmit={handleSubmit} className="register-form-container">
                <fieldset> 
                    <legend>Tu nuevo tour:</legend> 
                    
                    <div className="form-group">
                        <label for="city_id" className="form-label">Ciudad</label>
                        <select required onChange={handleInputChange} value={form.cityId} name="cityId">
                            <option value="" disabled defaultValue>Selecciona la ciudad</option>
                            {cities.map(city => <option value={city.id} key={city.id}>{city.name}</option>)}
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Nombre</label>
                        <small>Ponle nombre a la criatura, trata de ser original.</small>
                        <input onChange={handleInputChange} value={form.title} name="title" type="text" placeholder="Por ejemplo: 'Leyendas del Barrio de las letras'" required/>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Resumen</label>
                        <small>¡Capta la atención de los viajeros con menos 250 caracteres que definan tu free-tour!</small>
                        <input onChange={handleInputChange} value={form.highlight} name="highlight" type="text" placeholder="Un ejemplo sería 'Un paseo inolvidable por Cartagena.'" required/>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Descripción</label>
                        <small>Describe todo lo que verán durante el tiempo que compartirás con los viajeros. ¡No olvides incluir cualquier recomendación importante!</small>
                        <textarea onChange={handleInputChange} value={form.description} name="description" type="text" placeholder="No hay límite de caracteres, tu teclado debe echar humo..." required/>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Hora de inicio</label>
                        <small>¿A qué hora comienza el tour?</small>
                        <input onChange={handleInputChange} value={form.startingTime} name="startingTime" type="time" required/>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Duración</label>
                        <small style={{display: 'inline'}}>Aproximadamente, mi tour durará unas </small>
                        <input onChange={handleInputChange} value={form.duration} name="duration" type="number" step="0.25" min="0" style={{width: '6rem', display: 'inline'}} placeholder="Si tu free-tour dura dos horas y media, aquí sería '2.5'" required/>
                        <small style={{display: 'inline', margin: 0}}> horas.</small>
                    </div>

                    <div className="form-group">
                        <label for="availableWeekDays" className="form-label">Días de celebración</label>
                        <small>Selecciona qué día/s se realiza el tour.</small>
                    </div>
                    <div id="availableWeekDays">
                        {daysList.map((day, index )=><small className="check"> <input type="checkbox" name="weekDays" value={day.id} checked={daysCheckedState[index]} onChange={() => handleDaysCheckboxChange(index)}/>{day.name}</small>)}
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Punto de encuentro</label>
                        <small>¿Dónde te reunirás con ellos? ¿Cómo te reconocerán?</small>
                        <textarea onChange={handleInputChange} value={form.meetingPoint} name="meetingPoint" type="text" placeholder="Place Charles de Gaulle, justo en la esquina frente al McDonald's. Me reconoceréis por el paraguas verde :)" required className="meeting-point"/>
                    </div>

                    <div className="form-group">
                        <label for="categories" className="form-label">Categorías</label>
                        <small>Selecciona aquellas categorías para tu tour.</small>
                    </div>
                    <div id="categories">
                        {categoriesList.map((category, index)=> <small className="check"><input type="checkbox" name="categories" value={category.id} checked={catCheckedState[index]} onChange={() => handleCatCheckboxChange(index)}  /> {category.tag}</small>)}
                    </div>
                    
                    <div className="form-group">
                        <label for="imgpath" className="form-label">Foto</label>
                        <small>Sube una foto de algo representativo o de un grupo de viajeros. Los tours con foto son más llamativos y tienen hasta un 70% más de reservas.</small>
                        <input onChange={handleImageUpload} name="imgpath" type="file" id="imgpath" accept="png jpg jpeg"/>
                    </div>

                </fieldset>
                <input type="submit" value="Publicar mi tour" className="submit-btn"/>

            </form>

        </section>

    )
}
