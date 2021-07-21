import { GUIDES_FOLDER, TOURS_FOLDER } from "../config/config"
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';
import LoginForm from './LoginForm';
import AnswerCard from './AnswerCard';
import { useAuthContext } from "../context/AuthContext";

import './style/TourDetails.css'

export default function TourDetails({tour, guide}) {
    
    const {isAuthenticated} = useAuthContext();

    const QUESTION = "¿Cuánto cuesta?";
    const ANSWER = "Tu localz lo dará todo por mostrarte su ciudad y al final del tour eliges cuánto cuesta en función de tu experiencia. ¡Free viene de \"libre\", no de gratis! Eres libre de dar la propina que consideres a tu Localz";
    
    return (

       <div className="tourDetails-container">
            <section className="tourDetails-left">
                <h1>{tour.title}</h1>
                <span className='grey-label'>{tour?.city?.name}</span>
                <span className='grey-label'>Duración: {tour.duration} horas</span>

                <article className="tour-description">
                    <p><span className='about-label'>Descripción: </span></p>
                    <p>{tour.highlight}</p>
                    <p>{tour.description}</p>
                </article>

                <article className="meeting-details-container">   
                    <div className="details">
                        <p className='about-label'>Hora de comienzo: </p>
                        <p>{tour.startingTime} ¡Se puntual!</p>
                    </div>
                    <div className="details">
                        <p className='about-label'>Punto de encuentro: </p>
                        <p>{tour.meetingPoint} </p>
                    </div>
                    <Link to={`/guide/${guide?.id}`} className="localz-details">                        
                        <img src={GUIDES_FOLDER + guide?.imgpath} alt={guide?.name} className="guide-picture"/> 
                        <p className='about-label'>¡Soy {guide?.name}, tu localz!</p>
                    </Link>     
                </article>

                <img src={TOURS_FOLDER + tour?.imgpath} alt={tour?.name} className="tour-image"/>
            </section>

            <aside className="tourDetails-right">
                {isAuthenticated
                ?   <>
                        <div className="booking-box-container">
                            <h1>¡Asegura tu plaza!</h1>
                            <BookingForm tour={tour} />
                        </div>
                    </>
                :   <>
                        <h1>¡Accede a tu cuenta o regístrate para reservar!</h1>
                        <LoginForm/>
                    </>
                }
                <AnswerCard question={QUESTION} answer={ANSWER} imgpath={'answer3.png'} style={{"width":"100%"}}/>

            </aside>
        </div>
    )
}
