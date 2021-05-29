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
                <Link to='/newguide' className='book-btn'>reservar</Link>
            </div>
        </div>

    )
}
/* 
"fototour1"
"fototour2"
"fototour3"
"fototour4"
"fototour5"
"fototour6"
"fototour7"
"fototour8"
"fototour9"
"fototour10"
"fototour11"
"fototour12"
"fototour13"
"fototour14"
"fototour15"
"fototour16"
"fototour17"
"fototour18"
"fototour19"
"fototour20" 
*/