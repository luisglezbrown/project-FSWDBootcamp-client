import { Link } from 'react-router-dom';

import './style/LastGuideCard.css'

export default function LastGuideCard({ guide }) {
    const IMG_URL = "/images/guides/guide";

    return (
        <Link to={`/guide?id=${guide.id}`} className='guide-card'>
            <img src={`${IMG_URL}${guide.id}.jpg`} alt={`Vista de ${guide.name}`} className="guide-card-img" />
            <h3 className="guide-card-name">{guide.name}</h3>
            <p className="guide-card-city">Ofrece tours en {guide.city}</p>
            <p className="guide-card-about">" {guide.about} "</p>
        </Link>
    )
}