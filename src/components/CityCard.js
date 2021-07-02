import { Link } from 'react-router-dom';

import './style/CityCard.css'

export default function CityCard({ city }) {
    const IMG_URL = "/images/cities/";

    return (
        <Link to={`/city/${city.id}`} className='city-card'>
            <img src={`${IMG_URL}${city.imgpath}`} alt={`Vista de ${city.name}`} className="city-card-img" />
            <h3 className="city-card-name">{city.name}</h3>
        </Link>
    )
}
