import { Link } from 'react-router-dom';

import './style/TourCard.css'

export default function TourCard({ tour }) {
    const IMG_URL = `/images/tours/${tour.imgpath}`;
    const INLINE_STYLE = {backgroundImage: `linear-gradient(270deg, #fafafa 0%, rgba(255,204,0,0) 10%), url(${IMG_URL})`};

    return (
        <div className="tour-container">
            <div className="tour-image" style={INLINE_STYLE}>    
            {tour.categoryLabels.map(category => <span className='category'>#{category}</span>)}
            </div>
            
            <div className="tour-text">
                <h1>{tour.name}</h1>
                <span>⏱ {tour.duration} horas</span>
                <Link to={`/guide/${tour.guideId}`} className='guide-btn'>🗣 {tour.guideName}</Link>  
                <p>{tour.highlight}</p>
                <Link to={`/tour/${tour.id}`} className='book-btn'>reservar</Link>
            </div>
        </div>

    )
}