import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_CITIES_ALL } from '../config/config';


import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import './style/HeroImage.css';

export default function HeroImage() {

    const [cities, setCities] = useState([])
    const [cityTarget, setCityTarget] = useState('')


    useEffect(() => {
        fetch(GET_CITIES_ALL)
        .then(response => response.json())
        .then(data => setCities(data.results))
    }, [])

    console.log('cityTarget:'+cityTarget)

    let results = cities.filter(city => city.name === cityTarget);
    let cityId = (results.length > 0) ? results[0].id : null;

    console.log('cityId:'+cityId)

    return (
        <div className='hero-container'>
            <div className="hero-card">
                <div className='hero-info'>
                    <h1>La vida es short y el world muy grande...</h1>
                    <h3>Reserva GRATIS el mejor free-tour con guías locales y no pierdas ni un moment</h3>
                </div>
                <div className='hero-input'>
                    <h1>ME VOY A...</h1>
                    {/* <input type='text' placeholder='ej: París, Madrid, New York...'/> */}
                    <Autocomplete
                    onChange={e => setCityTarget(e.target.innerText)}
                    id="free-solo-demo"
                    freeSolo
                    options={cities.map((city) => city.name)}
                    renderInput={(params) => (
                    <TextField {...params} label="Ej: París, Tokio..." margin="normal" variant="outlined" />
                    )}
                />
                <Link to={`/city/${cityId}`} className="btn login">¡BUSCA!</Link>
                {/* <button onClick={}>¡BUSCA!</button> */}
                </div>
            </div>
        </div>
    )
}
