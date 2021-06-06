import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BookingForm from './BookingForm';
import AnswerCard from './AnswerCard';

import { IMAGE_PATH_3 } from './AnswersSettings'

import './style/TourDetails.css'

export default function TourDetails({tour, guide}) {
    
    const [booking, setBooking] = useState({});
    let { tourId } = useParams();
    
    const QUESTION = "¿Cuánto cuesta?";
    const ANSWER = "Tu localz lo dará todo por mostrarte su ciudad y al final del tour eliges cuánto cuesta en función de tu experiencia. ¡Free viene de \"libre\", no de gratis! Eres libre de dar la propina que consideres a tu Localz";
    
    return (

       <div className="tourDetails-container">
            <section className="tourDetails-left">
                <h1>{tour.name}</h1>
                <span className='grey-label'>{tour.cityName}</span>
                <span className='grey-label'>Duración: {tour.duration} horas</span>

                <article className="tour-description">
                    <p><span className='about-label'>Descripción: </span></p>
                    <p>{tour.shortDesc}</p>
                    <p>{tour.longDesc}</p>
                </article>

                <article className="meeting-details-container">   
                    <div className="details">
                        <p className='about-label'>Hora de comienzo: </p>
                        <p>{tour.startTime} ¡Se puntual!</p>
                    </div>
                    <div className="details">
                        <p className='about-label'>Punto de encuentro: </p>
                        <p>{tour.meetingPoint} </p>
                    </div>
                    <Link to={`/guide/${guide.id}`} className="localz-details">                        
                        <img src={`/images/guides/${guide.imgpath}`} alt={tour.name} className="guide-picture"/> 
                        <p className='about-label'>¡Soy {guide.name}, tu localz!</p>
                    </Link>     
                </article>

                <img src={`/images/tours/${tour.imgpath}`} alt={tour.name} className="tour-image"/>
            </section>

            <aside className="tourDetails-right">
                <div className="booking-box-container">
                    <h1>¡Asegura tu plaza!</h1>
                    <BookingForm booking={booking} setBooking={setBooking} tourId={tourId}/>
                </div>
                <AnswerCard question={QUESTION} answer={ANSWER} imgpath={IMAGE_PATH_3} style={{"width":"100%"}}/>
            </aside>
        </div>
    )
}
