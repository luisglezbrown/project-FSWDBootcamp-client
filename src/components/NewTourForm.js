import { useForm } from '../hooks/useForm';

import './style/RegisterForm.css'

export default function NewTourForm() {

    let categoriesList = ['Historia', 'Gastro', 'Naturaleza', 'Alternativo', 'Playa', 'Compras', 'Tradiciones', 'LGBTI+'];

    const API_CITIES = {
        total: 15,
        results: [
            {id: 1, name: "París", country: "Francia"},
            {id: 2, name: "New York", country: "Estados Unidos"},
            {id: 3, name: "Barcelona", country: "España"},
            {id: 15, name: "Cartagena de Indias", country: "Colombia"},
            {id: 16, name: "Tokio", country: "Japón"},
            {id: 5, name: "Londres", country: "Reino Unido"},
            {id: 6, name: "Rio de Janeiro", country: "Brasil"},
            {id: 7, name: "Abu Dhabi", country: "Emiratos Árabes"},
            {id: 9, name: "Roma", country: "Italia"},
            {id: 4, name: "Estambul", country: "Turquía"},
            {id: 10, name: "Atenas", country: "Grecia"},
            {id: 11, name: "Praga", country: "República Checa"},
            {id: 13, name: "San Petersburgo", country: "Rusia"},
            {id: 14, name: "San Francisco", country: "Estados Unidos"},
            {id: 8, name: "Viena", country: "Austria"},
            {id: 12, name: "Budapest", country: "Hungría"}
        ]
    };

    /*     useEffect(() => {
        // TODO: fetch a mi endpoint "allCities"
    }, []) */

    let cities = API_CITIES.results;

    const initialFormState = {cityId: "", title: "", duration: Number(), availableWeekDays: Number(), hightlight: "", startingTime: "", meetingPoint: "", description: "", imgpath: "", categories: Boolean()};
    const [form, handleInputChange] = useForm(initialFormState); 

    const handleSubmit = e => {
        e.preventDefault();
        //TODO: Introducir la lógica del formulario.
    };


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
                        <input onChange={handleInputChange} value={form.hightlight} name="hightlight" type="text" placeholder="Un ejemplo sería 'Un paseo inolvidable por Cartagena.'" required/>
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
                        <small className="check"> <input type="checkbox" name="availableWeekDays" value={form.availableWeekDays} onChange={handleInputChange}/>Lunes</small>
                        <small className="check"> <input type="checkbox" name="availableWeekDays" value={form.availableWeekDays} onChange={handleInputChange}/>Martes</small>
                        <small className="check"> <input type="checkbox" name="availableWeekDays" value={form.availableWeekDays} onChange={handleInputChange}/>Miércoles</small>
                        <small className="check"> <input type="checkbox" name="availableWeekDays" value={form.availableWeekDays} onChange={handleInputChange}/>Jueves</small>
                        <small className="check"> <input type="checkbox" name="availableWeekDays" value={form.availableWeekDays} onChange={handleInputChange}/>Viernes</small>
                        <small className="check"> <input type="checkbox" name="availableWeekDays" value={form.availableWeekDays} onChange={handleInputChange}/>Sábado</small>
                        <small className="check"> <input type="checkbox" name="availableWeekDays" value={form.availableWeekDays} onChange={handleInputChange}/>Domingo</small>
                        {/* //TODO: Cómo enviar los valores de días de la semana */}
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Punto de encuentro</label>
                        <small>¿Dónde te reunirás con ellos? ¿Cómo te reconocerán?</small>
                        <textarea onChange={handleInputChange} value={form.description} name="description" type="text" placeholder="Place Charles de Gaulle, justo en la esquina frente al McDonald's. Me reconoceréis por el paraguas verde :)" required className="meeting-point"/>
                    </div>

                    <div className="form-group">
                        <label for="categories" className="form-label">Categorías</label>
                        <small>Selecciona aquellas categorías para tu tour.</small>
                    </div>
                    <div id="categories">
                        {categoriesList.map(category => <small className="check"> <input type="checkbox" name="categories" value={form.categories} onChange={handleInputChange}/>{category}</small>)}
                        {/* //TODO: Cómo enviar los valores de categorías */}
                    </div>
                    
                    <div className="form-group">
                        <label for="imgpath" className="form-label">Foto</label>
                        <small>Sube una foto de algo representativo o de un grupo de viajeros. Los tours con foto son más llamativos y tienen hasta un 70% más de reservas.</small>
                        <input onChange={handleInputChange} value={form.imgpath} name="imgpath" type="file" id="imgpath" />
                        {/* //TODO: Cómo meter el nombre del archivo */}
                    </div>

                </fieldset>
                <input type="submit" value="Publicar mi tour" className="submit-btn"/>

            </form>

        </section>

    )
}
