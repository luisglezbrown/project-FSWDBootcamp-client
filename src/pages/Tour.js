import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from '../components/Navbar';
import TourDetails from '../components/TourDetails';

export default function Tour() {

    const { id } = useParams();
    const [tour, setTour] = useState([])

    const API_TOUR_DETAILS = `http://127.0.0.1:8000/api/tourdetails/${id}`
    useEffect(() => {
        fetch(API_TOUR_DETAILS)
        .then(response => response.json())
        .then(data => setTour(data))
    })


	
    // id	3
    // title	"Paseando por Cartagena"
    // duration	3
    // weekDays	
    // 0	"1"
    // 1	"2"
    // 2	"3"
    // 3	"4"
    // 4	"5"
    // startingTime	"15:30"
    // meetingPoint	"Torre del Reloj, junto a la tienda de souvenirs"
    // categories	
    // 0	"Panorámico"
    // imgpath	"IMG_0172.jpg"
    // highlight	"Un paseo inolvidable por Cartagena."
    // description	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum. Aspernatur similique molestiae quos earum suscipit nostrum consequatur, voluptatibus iure delectus laboriosam tempore vel illum dolores ut neque error maxime facilis cum. Provident quaerat impedit porro. Delectus at distinctio recusandae veritatis dolorem consectetur quas eius, perferendis labore exercitationem itaque doloribus officia odit nostrum, sed nihil. Vero aut quas facere labore laborum esse inventore dolore architecto molestiae. Harum vitae totam ut consectetur ea corrupti doloribus vero! Rem reprehenderit minima optio amet reiciendis. Corporis sint minus ipsum numquam, enim saepe quaerat porro libero adipisci reprehenderit vitae inventore, corrupti quae sapiente deserunt aut!"
    // guide	
    // id	1503
    // imgpath	"guide1503.jpg"
    // name	"Alfonso"
    // city	
    // id	15
    // imgpath	"card-15.png"
    // name	"Cartagena de Indias"

    const guide = tour?.guide;

    return (
        <>
            <Navbar />
            <TourDetails guide={guide} tour={tour}/>
        </>
    )
}
