import { Link } from 'react-router-dom';
import {CITIES_FOLDER} from "../config/config"

import './style/CityCard.css'

export default function CityCard({ city }) {

    return (
        <Link to={`/city/${city.id}`} className='city-card'>
            <img src={CITIES_FOLDER + city.imgpath} alt={`Vista de ${city.name}`} className="city-card-img" />
            <h3 className="city-card-name">{city.name}</h3>
        </Link>
    )
}
