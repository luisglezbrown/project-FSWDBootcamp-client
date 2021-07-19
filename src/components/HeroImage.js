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

    // console.log('cityTarget:'+cityTarget)

    let results = cities.filter(city => city.name === cityTarget);
    let cityId = (results.length > 0) ? results[0].id : null;

    // console.log('cityId:'+cityId)

    return (
        <div className='hero-container'>
            <div className="hero-card">
                <h1 className='hero-h1'>La vida es short y el world muy grande...</h1>
                <h3 className='hero-h3 text-shadow'>Reserva GRATIS el mejor free-tour con guías locales y no pierdas ni un moment</h3>
                <div className=' hero-input flex space-between'>
                    <Autocomplete
                        className="input-cities"
                        onChange={e => setCityTarget(e.target.innerText)}
                        id="free-solo-demo"
                        freeSolo
                        options={cities.map((city) => city.name)}
                        renderInput={(params) => (
                        <TextField {...params} label="Me voy a..." margin="normal" variant="outlined" />)}
                    />
                    <Link to={`/city/${cityId}`} className="btn-yellow">GO!</Link>
                </div>
            </div>
        </div>
    )
}
