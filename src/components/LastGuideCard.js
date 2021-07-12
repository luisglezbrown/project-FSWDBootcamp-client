import { GUIDES_FOLDER } from "../config/config"
import { Link } from 'react-router-dom';

import './style/LastGuideCard.css'

export default function LastGuideCard({ guide }) {

    return (
        <Link to={`/guide/${guide.id}`} className='guide-card'>
            <img src={GUIDES_FOLDER + guide.imgpath} alt={`Vista de ${guide.name}`} className="guide-card-img" />
            <h3 className="guide-card-name">{guide.name}</h3>
            {/* <p className="guide-card-city">Ofrece tours en {guide.city}</p> */}
            <p className="guide-card-about">" {guide.shortDesc} "</p>
        </Link>
    )
}