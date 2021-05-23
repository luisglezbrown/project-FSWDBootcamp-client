import { Link } from 'react-router-dom';

import './style/TopCityCard.css'

export default function TopCityCard({ city }) {
    const IMG_URL = "/images/cities/card-";

    return (
        <Link to={`/city?id=${city.id}`} className='city-card'>
            <img src={`${IMG_URL}${city.id}.png`} alt={`Vista de ${city.name}`} className="city-card-img" />
            <h3 className="city-card-name">{city.name}</h3>
        </Link>
    )
}
